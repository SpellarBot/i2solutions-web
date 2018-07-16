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
            >
              <v-icon>delete</v-icon>
            </v-btn>
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
          </footer>
  </main>
</template>
<script>
import DialogEditarCapacitaciones from './Editar/DialogEditarCapacitaciones'
const moment = require('moment')
export default {
  props: [ 'capacitacion' ],
  components: { DialogEditarCapacitaciones },
  data () {
    return {
      visibleEdicion: false,
      capacitacionTema: '',
      capacitacionDescripcion: '',
      capacitacionFecha: '',
      capacitacionCapacitador: '',
      capacitacionId: ''
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
    }
  }
}
</script>
<style>
  </style>
