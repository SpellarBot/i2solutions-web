<template>
  <main id="DialogCapacitacionesFromEstablecimientos">
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
    ></v-progress-circular>
  </div>
    </template>
    <template class="content" v-if="valid">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Establecimiento {{ this.establecimientoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Capacitaciones: </h1>
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
      loading: false,
      valid: null,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialogCapacitaciones: false,
      indexEliminar: 0,
      capacitaciones: [],
      capacitacionSelected: null,
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
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
