<template>
  <main id="DialogCapacitacionesFromEstablecimientos">
    <template class="content">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Establecimiento {{ this.establecimientoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Capacitaciones: </h1>
      <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="agregar()">Agregar Capacitación</v-btn>
      <v-layout align-center justify-center row>
      <v-data-table
      :headers="headers"
      :items="capacitaciones"
      rows-per-page-text="Filas por página"
      class="elevation-1"
      :rows-per-page-items="[10,20,30,60]"
      >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
        <td class="text-xs-left">{{ props.item.tema }}</td>
        <td class="text-xs-left">{{ fecha(props.item.fechaCapacitacion) }}</td>
        <td class="text-xs-left">{{ props.item.areasNombre }}</td>
        <td class="justify-center layout px-0">
          <v-btn flat
          icon
            small
            v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
            @click="eliminarCapacitacion(props.item)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
          </td>
        </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <v-card flat>
            <v-card-text class="text-xs pa-0"><b>Descripción:</b> {{ props.item.descripcion }}</v-card-text>
            <v-card-text class="text-xs pa-0"><b>Capacitador:</b> {{ props.item.nombre }}</v-card-text>
            <v-card-text class="text-xs pa-0"><b>Personas Capacitadas:</b></v-card-text>
            <v-card-text class="text-xs pa-0" v-for="persona in props.item.personas">
              {{ persona.nombres }}  {{ persona.apellidos }}
            </v-card-text>
          </v-card>
        </template>
      </v-data-table>
    </v-layout>
    </v-card>
    </v-dialog>
    <v-snackbar
              :timeout="3000"
              :multi-line="true"
              :color="color"
              :top="true"
              v-model="snackbar"
            >
              {{mensajeSnackbar}}
            </v-snackbar>
            <footer>
              <v-layout row justify-center>
                <v-dialog v-model="visibleAgregar" @keydown.esc="visibleAgregar=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nueva Capacitación</span>
        </v-card-title>
        <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model = "newTema"
                  label="Tema" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required]"
                  multi-line
                ></v-text-field>
                <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="newDate"
                  label="Fecha"
                  readonly
                  required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  :min="minDate"
                  @change="save"
                  :rules="[rules.required]"
                ></v-date-picker>
              </v-menu>
                <v-text-field
                  v-model = "newCapacitador"
                  label="Capacitador" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-select
                :items="areasExistentes"
                label="Área"
                v-model = "newAreaId"
                item-text="areaNombre"
                :rules="[rules.required]"
                ></v-select>
                <v-btn color="primary" dark @click="verDialogCapacitados">Agregar Capacitados</v-btn>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat :disabled="!valid" @click = "crear ()">Crear</v-btn>
          <v-btn color="blue darken-1" flat @click.native="visibleAgregar = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
              <v-layout row justify-center>
              <v-dialog v-model="eliminarDialogCapacitaciones" persistent max-width="290">
                <v-card>
                  <v-card-title class="headline">Eliminar</v-card-title>
                  <v-card-text>¿Está seguro que quiere eliminar esta Capacitación?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" flat @click.native="eliminarDialogCapacitaciones = false">No</v-btn>
                    <v-btn :class="'boraarCapacitacion' + this.capacitacionSelected" color="blue darken-1" flat @click = "borrarCapacitacion()">Sí</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
            <v-layout row justify-center>
              <v-dialog v-model="agregarPersonasDialog" persistent max-width="700">
                <v-card>
                  <v-card-title class="headline">Capacitados</v-card-title>
                  <v-card-text><b>Lista de capacitados.</b></v-card-text>
                  <v-card-text v-if="this.personasNombres.length===0">No ha ingresado capacitados</v-card-text>
                  <div v-if="this.personasNombres.length > 0">
                    <v-card-text v-for="persona in this.personasNombres">
                      {{ persona }}
                    </v-card-text>
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-select
                    :items="personasEstablecimiento"
                label="Personas"
                v-model = "personaToAdd"
                item-text="nombres"
                ></v-select>
                <v-btn color="blue" flat @click.native="agregarCapacitado">Agregar</v-btn>
                <v-btn color="blue" flat @click.native="agregarPersonasDialog = false">Salir</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
  </footer>
  </template>
  </main>
</template>
<script>
const moment = require('moment')
export default {
  data () {
    return {
      newTema: '',
      newDescripcion: '',
      newDate: null,
      newCapacitador: '',
      date: null,
      menu: false,
      loading: false,
      valid: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialogCapacitaciones: false,
      indexEliminar: 0,
      capacitaciones: [],
      personasEstablecimiento: [],
      personaToAdd: null,
      personasNombres: [],
      personas: [],
      alreadyLoaded: false,
      agregarPersonasDialog: false,
      capacitacionSelected: null,
      visibleAgregar: false,
      areasExistentes: [],
      newAreaId: null,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      },
      headers: [
        {
          text: 'Tema',
          align: 'left',
          sortable: false,
          value: 'nombre'
        },
        { text: 'Fecha', value: 'fecha', sortable: false },
        { text: 'Área', value: 'areasNombre', sortable: false },
        { text: 'Acciones', value: 'name', sortable: false }
      ]
    }
  },
  name: 'DialogCapacitaciones',
  props: ['visible', 'establecimientoId', 'establecimientoNombre'],
  watch: {
    show () {
      this.cargarData()
    },
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'Año'))
    },
    date () {
      this.newDate = moment(this.date).format('L')
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },
    minDate: {
      get () {
        let oneYearAgo = new Date()
        oneYearAgo.setDate(oneYearAgo.getDate() - 365)
        let finalDate = oneYearAgo.toISOString().substr(0, 10)
        return finalDate
      }
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    save (newDate) {
      this.$refs.menu.save(newDate)
    },
    crear () {
      if (this.personas.length === 0) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'No ha agregado capacitados.'
      } else {
        let tema = this.$data.newTema
        let descripcion = this.$data.newDescripcion
        let fechaCapacitacion = moment(this.$data.newDate).format()
        let nombre = this.$data.newCapacitador
        let areasId = Number(this.$data.newAreaId.id)
        let areaNombre = this.$data.newAreaId.areaNombre
        let personas = this.$data.personas
        this.$store.dispatch('crearCapacitacion', { nombre, descripcion, tema, fechaCapacitacion, areasId, personas })
          .then((resp) => {
            console.log('Here')
            let areasNombre = areaNombre
            let id = this.$store.getters.capacitacionCreada.id
            console.log(id)
            let capacitacion = { id, nombre, tema, descripcion, fechaCapacitacion, areasId, areasNombre }
            console.log(capacitacion)
            this.capacitaciones.push(capacitacion)
            this.snackbar = true
            this.mensajeSnackbar = 'Capacitacion editada exitosamente.'
            this.color = 'success'
            this.$store.dispatch('emptyCapacitacionCreada')
            this.visibleAgregar = false
            this.reiniciar()
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      }
    },
    cargarData () {
      this.loading = true
      this.capacitaciones = this.$store.getters.capacitaciones
      this.loading = false
    },
    agregarCapacitado () {
      let personaId = this.personaToAdd.id
      let personaNombre = this.personaToAdd.nombres + ' ' + this.personaToAdd.apellidos
      this.personas.push(personaId)
      console.log(this.personas)
      this.personasNombres.push(personaNombre)
      console.log(this.personasNombres)
      let indexBorrar = this.personasEstablecimiento.indexOf(this.personaToAdd)
      this.personasEstablecimiento.splice(indexBorrar, 1)
      this.personaToAdd = null
      this.snackbar = true
      this.mensajeSnackbar = 'Capacitado agregado con éxito.'
      this.color = 'success'
    },
    verDialogCapacitados () {
      if (this.alreadyLoaded === true) {
        this.agregarPersonasDialog = true
      } else {
        this.getPersonasFromEstablecimiento()
      }
    },
    getPersonasFromEstablecimiento () {
      this.$store.dispatch('getPersonasFromEstablecimiento', this.establecimientoId)
        .then((resp) => {
          console.log('Done2')
          this.personasEstablecimiento = this.$store.getters.personas
          this.agregarPersonasDialog = true
          this.alreadyLoaded = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    closing () {
      this.$store.dispatch('emptyCapacitaciones')
      this.show = false
      this.alreadyLoaded = false
      this.personasNombres.length = 0
      this.personas.length = 0
    },
    borrarCapacitacion () {
      this.eliminarDialogCapacitaciones = false
      let capacitacionesId = Number(this.capacitacionSelected)
      console.log('capacitacionesId', capacitacionesId)
      this.$store.dispatch('deleteCapacitaciones', capacitacionesId)
        .then((resp) => {
          this.capacitaciones.splice(this.indexEliminar, 1)
          for (let i = 0; i < this.$store.getters.establecimientos.length; i++) {
            let establecimiento = this.$store.getters.establecimientos[i]
            if (establecimiento.id === this.establecimientoId) {
              establecimiento.cantidadCapacitaciones--
              break
            }
          }
          console.log('entre')
          this.snackbar = true
          this.mensajeSnackbar = 'Capacitación borrada con exito.'
          this.color = 'success'
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    eliminarCapacitacion (capacitacion) {
      this.indexEliminar = this.capacitaciones.indexOf(capacitacion)
      this.capacitacionSelected = capacitacion.id
      this.eliminarDialogCapacitaciones = true
    },
    agregar () {
      this.$store.dispatch('getAreas', this.establecimientoId)
        .then((resp) => {
          this.areasExistentes = this.$store.getters.areas
          this.visibleAgregar = true
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = 'No se pudieron cargar las áreas.'
        })
    },
    reiniciar () {
      this.$data.valid = false
      this.$refs.form.reset()
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
