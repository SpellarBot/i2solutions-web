<template>
  <main id="DialogAccidentesFromEstablecimientos">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Puesto {{ this.puestoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Accidentes: </h1>
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
        <td v-if="props.item.atendidoEnEmpresa===0" class="text-xs-left">No fue atendido en la empresa</td>
        <td v-if="props.item.atendidoEnEmpresa===1" class="text-xs-left">Fue atendido en la empresa</td>
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
          </v-card>
        </template>
      </v-data-table>
    </v-layout>
    </v-card>
    </v-dialog>
    <footer>
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
  props: ['visible', 'puestoId', 'puestoNombre'],
  data () {
    return {
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
      eliminarDialogAccidentes: false,
      indexEliminar: 0,
      deleteMode: 1,
      accidentes: [],
      accidenteSelected: null,
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
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
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
      this.valid = null
      this.loading = true
      console.log(this.$store.getters.accidentes)
      this.accidentes = this.$store.getters.accidentes
      console.log(this.headers)
      this.loading = false
      this.valid = true
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
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
