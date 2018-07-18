<template>
  <main id="CardCapacitaciones">
        <div><b>{{ capacitacions.tema }}</b></div>
          <div class="small-width">{{ capacitacions.descripcion }}</div>
          <div><b>Fecha:</b> {{ fecha(capacitacions.fechaCapacitacion) }} </div>
          <div><b>Capacitador:</b> {{ capacitacions.nombre }}z</div>
          <v-btn
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(capacitacions, fecha(capacitacions.fechaCapacitacion))"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="blue"
              @click="eliminarCapacitacion(capacitacions)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
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
            <DialogEditarCapacitaciones
            :visible="visibleEdicion"
            :capacitacionTema="capacitacionTema"
            :capacitacionDescripcion="capacitacionDescripcion"
            :capacitacionFecha="capacitacionFecha"
            :capacitacionCapacitador="capacitacionCapacitador"
            :capacitacionId="capacitacionId"
            @close="visibleEdicion=false"
            ></DialogEditarCapacitaciones>
            <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogCapacitaciones" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar esta Capacitación?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogCapacitaciones = false">No</v-btn>
            <v-btn color="blue darken-1" flat @click = "borrarCapacitacion()">Sí</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

  </footer>
  </main>
</template>
<script>
import DialogEditarCapacitaciones from './Editar/DialogEditarCapacitaciones'
const moment = require('moment')
export default {
  props: [ 'capacitacion', 'puestoId' ],
  components: { DialogEditarCapacitaciones },
  data () {
    return {
      visibleEdicion: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialogCapacitaciones: false,
      capacitacionTema: '',
      capacitacionDescripcion: '',
      capacitacionFecha: '',
      capacitacionCapacitador: '',
      capacitacionId: '',
      capacitacionSelected: 0
    }
  },
  computed: {
    capacitacions: {
      get () {
        return this.capacitacion
      }
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    visualizarEditar (capacitacion, fecha) {
      this.capacitacionTema = capacitacion.tema
      this.capacitacionDescripcion = capacitacion.descripcion
      this.capacitacionFecha = fecha
      this.capacitacionCapacitador = capacitacion.nombre
      this.capacitacionId = capacitacion.id
      this.visibleEdicion = true
    },

    eliminarCapacitacion (capacitacion) {
      this.capacitacionSelected = capacitacion.id
      console.log(this.capacitacionSelected)
      this.eliminarDialogCapacitaciones = true
    },
    borrarCapacitacion () {
      this.eliminarDialogCapacitaciones = false
      let capacitacionesId = Number(this.capacitacionSelected)
      console.log('capacitacionesId', capacitacionesId)
      this.$store.dispatch('deleteCapacitaciones', capacitacionesId)
        .then((resp) => {
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
    }
  }
}
</script>
<style>
</style>
