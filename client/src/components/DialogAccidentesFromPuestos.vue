<template>
  <main id="DialogAccidentesFromEstablecimientos">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{nombreEstablecimiento}} > Puesto {{ this.puestoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Accidentes: </h1>
      <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="visibleAgregar = true">Agregar Accidente</v-btn>
      <v-layout align-center justify-center row>
      <v-data-table
      :headers="headers"
      :items="accidentes"
      rows-per-page-text="Filas por página"
      class="elevation-1"
      :rows-per-page-items="[10,20,30,60]"
      >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
        <td class="text-xs-left">{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ fecha(props.item.fecha) }}</td>
        <td class="text-xs-left">{{ props.item.heridos }}</td>
        <td class="text-xs-left">{{ props.item.muertos }}</td>
        <td v-if="props.item.atendidoEnEmpresa==='0' || props.item.atendidoEnEmpresa===false" class="text-xs-left">No fue atendido en la empresa</td>
        <td v-if="props.item.atendidoEnEmpresa==='1' || props.item.atendidoEnEmpresa===true" class="text-xs-left">Fue atendido en la empresa</td>
        <td class="justify-center layout px-0">
          <v-btn flat
          icon
            small
            v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
            @click="eliminarAccidente(props.item)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
          </td>
        </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <v-card flat>
            <v-card-text class="text-xs pa-0"><b>Descripción:</b> {{ props.item.descripcion }}</v-card-text>
            <v-card-text class="text-xs pa-0"><b>Días laborales perdidos:</b> {{ props.item.diasPerdidos }}</v-card-text>
          </v-card>
        </template>
        <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        No hay acidentes ingresados en el sistema para consultar
      </v-alert>
    </template>
      </v-data-table>
    </v-layout>
    </v-card>
    </v-dialog>
    <footer>
      <v-layout row justify-center>
        <v-dialog v-model="visibleAgregar" @keydown.esc="visibleAgregar=false" persistent max-width="600px">
          <v-card>
        <v-card-title>
          <span class="headline">Nuevo Accidente</span>
        </v-card-title>
        <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required, rules.min]"
                  maxlength=50
                  minlength=2
                  counter=50
                ></v-text-field>
                <v-text-field
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required, rules.min]"
                  maxlength=50
                  minlength=2
                  counter=100
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
                  v-model = "newHeridos"
                  label="Número Heridos" required
                  :rules="[rules.required, rules.max]"
                  maxlength=2
                  :counter=2
                  mask="#######"

                ></v-text-field>
                <v-text-field
                  v-model = "newMuertos"
                  label="Número Fallecidos" required
                  :rules="[rules.required, rules.max]"
                  maxlength=2
                  :counter=2
                  mask="#######"
                ></v-text-field>
                <v-text-field
                  v-model = "newDiasPerdidos"
                  label="Días laborales perdidos por el accidente" required
                  :rules="[rules.required, rules.max]"
                  maxlength=3
                  :counter=3
                  mask="###"
                ></v-text-field>
                <v-checkbox
      label="¿Fue atendido en la empresa?"
      v-model="newCheckbox"
    ></v-checkbox>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" :disabled="!valid" @click="crear()">Crear</v-btn>
          <v-btn color="blue darken-1" flat @click.native="visibleAgregar = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
      </v-layout>
            <v-layout row justify-center>
            <v-dialog v-model="eliminarDialogAccidentes" persistent max-width="290">
              <v-card>
                <v-card-title class="headline">Eliminar</v-card-title>
                <v-card-text>¿Está seguro que quiere eliminar este Accidente?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue" flat @click.native="eliminarDialogAccidentes = false">No</v-btn>
                  <v-btn :class="'borrarAccidente' + this.accidenteSelected" color="blue darken-1" flat @click = "borrarAccidente()">Sí</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>

          <v-snackbar
              :timeout="3000"
              :multi-line="true"
              :color="color"
              :top="true"
              v-model="snackbar"
            >
              {{mensajeSnackbar}}
            </v-snackbar>
          </footer>
  </main>
</template>
<script>
const moment = require('moment')
export default {
  name: 'DialogAccidentesFromPuestos',
  props: ['visible', 'puestoId', 'puestoNombre', 'nombreEstablecimiento'],
  data () {
    return {
      //variables a usar por el componente
      valid: false,
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
      eliminarDialogAccidentes: false,
      indexEliminar: 0,
      deleteMode: 1,
      accidentes: [],
      accidenteSelected: null,
      visibleAgregar: false,
      newNombre: '',
      newDescripcion: '',
      newDate: '',
      newDiasPerdidos: '',
      newHeridos: null,
      newMuertos: null,
      newCheckbox: false,
      date: null,
      stepper: 1,
      menu: false,
      checkbox: false,
      rules: {
        max: v => (!Number.isNaN(parseInt(v)) && (Number(v) <= 50)) || 'Debe ser un número y menor o igual a 50',
        required: (value) => !!value || 'Campo Requerido.',
        min: (v) => v.length >= 2 || 'Mímimo se requieres 2 letras',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      },
      headers: [
        {
          text: 'Nombre',
          align: 'left',
          sortable: false,
          value: 'nombre'
        },
        { text: 'Fecha', value: 'fecha', sortable: false },
        { text: 'Heridos', value: 'heridos', sortable: false },
        { text: 'Fallecidos', value: 'muertos', sortable: false },
        { text: 'Atención', value: 'atendidoEnEmpresa', sortable: false },
        { text: 'Acciones', value: 'name', sortable: false }
      ]
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
    },
    checkbox () {
      this.newCheckbox = this.checkbox
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
        let oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
        let finalDate = oneWeekAgo.toISOString().substr(0, 10)
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
      //funcion para crear un accidente. Recibe el nombre, descripcion, fecha, numero de heridos, numero de fallecidos, booleano de si el accidente fue atendido en la empresa y cuantos dias laborales se perdieron por culpa del accidente
      let nombre = this.$data.newNombre
      let descripcion = this.$data.newDescripcion
      let fecha = moment(this.$data.newDate).format()
      let heridos = Number(this.$data.newHeridos)
      let muertos = Number(this.$data.newMuertos)
      let atendidoEnEmpresa = this.$data.newCheckbox
      let diasPerdidos = Number(this.$data.newDiasPerdidos)
      let puestosId = Number(this.puestoId)
      this.$store.dispatch('crearAccidente', { nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, diasPerdidos, puestosId })
        .then((resp) => {
          console.log('Here')
          let id = this.$store.getters.accidenteCreado.id
          console.log(id)
          let accidente = { id, nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, diasPerdidos, puestosId }
          console.log(accidente)
          this.accidentes.push(accidente)
          this.reiniciar()
          this.snackbar = true
          this.mensajeSnackbar = 'Accidente creado exitosamente.'
          this.color = 'success'
          this.$store.dispatch('emptyAccidenteCreado')
          this.visibleAgregar = false
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    borrarAccidente () {
      this.eliminarDialogAccidentes = false
      let accidentesId = Number(this.accidenteSelected)
      console.log('accidentesId', accidentesId)
      this.$store.dispatch('deleteAccidentes', accidentesId)
        .then((resp) => {
          console.log('entre')
          this.accidentes.splice(this.indexEliminar, 1)
          this.mensajeSnackbar = 'Accidente borrado con exito.'
          this.snackbar = true
          this.color = 'success'
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    cargarData () {
      this.loading = true
      console.log(this.$store.getters.accidentes)
      this.accidentes = this.$store.getters.accidentes
      console.log(this.headers)
      this.loading = false
    },
    closing () {
      this.$store.dispatch('emptyAccidentes')
      this.show = false
    },
    eliminarAccidente (accidente) {
      this.indexEliminar = this.accidentes.indexOf(accidente)
      this.accidenteSelected = accidente.id
      console.log(this.accidenteSelected)
      this.eliminarDialogAccidentes = true
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
