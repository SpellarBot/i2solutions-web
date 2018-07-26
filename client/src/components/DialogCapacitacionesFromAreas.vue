<template>
  <main id="DialogCapacitacionesFromEstablecimientos">
    <template class="content">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Área {{ this.areaNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Capacitaciones: </h1>
      <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="visibleAgregar=true">Agregar Capacitación</v-btn>
      <v-layout align-center justify-center row>
      <v-data-table
      :headers="headers"
      :items="capacitaciones"
      class="elevation-1"
      rows-per-page-text="Filas por página"
      :rows-per-page-items="[10,20,30,60]"
      >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
        <td class="text-xs-left">{{ props.item.tema }}</td>
        <td class="text-xs-left">{{ fecha(props.item.fechaCapacitacion) }}</td>
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
              <v-form v-model="valid">
                <v-text-field
                  v-model = "newTema"
                  label="Tema" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required]"
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
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="visibleAgregar = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" flat :disabled="!valid" @click = "crear ()">Crear</v-btn>
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
      valid: false,
      loading: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialogCapacitaciones: false,
      indexEliminar: 0,
      capacitaciones: [],
      capacitacionSelected: null,
      visibleAgregar: false,
      createMode: 0,
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
        { text: 'Acciones', value: 'name', sortable: false }
      ]
    }
  },
  name: 'DialogCapacitaciones',
  props: ['visible', 'areaId', 'areaNombre'],
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
        let oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
        let finalDate = oneWeekAgo.toISOString().substr(0, 10)
        return finalDate
      }
    }
  },
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
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    save (newDate) {
      this.$refs.menu.save(newDate)
    },
    crear () {
      let tema = this.$data.newTema
      let descripcion = this.$data.newDescripcion
      let fechaCapacitacion = moment(this.$data.newDate).format()
      let nombre = this.$data.newCapacitador
      let areasId = this.areaId
      console.log(fechaCapacitacion)
      this.$store.dispatch('crearCapacitacion', { nombre, descripcion, tema, fechaCapacitacion, areasId })
        .then((resp) => {
          console.log('Here')
          let capacitacion = { nombre, tema, descripcion, fechaCapacitacion, areasId }
          console.log(capacitacion)
          this.capacitaciones.push(capacitacion)
          this.snackbar = true
          this.mensajeSnackbar = 'Capacitacion editada exitosamente.'
          this.color = 'success'
          this.visibleAgregar = false
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    cargarData () {
      this.valid = null
      this.loading = true
      this.capacitaciones = this.$store.getters.capacitaciones
      this.loading = false
      this.valid = true
    },
    closing () {
      this.$store.dispatch('emptyCapacitaciones')
      this.show = false
    },
    borrarCapacitacion () {
      this.eliminarDialogCapacitaciones = false
      let capacitacionesId = Number(this.capacitacionSelected)
      console.log('capacitacionesId', capacitacionesId)
      this.$store.dispatch('deleteCapacitaciones', capacitacionesId)
        .then((resp) => {
          this.capacitaciones.splice(this.indexEliminar, 1)
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
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
