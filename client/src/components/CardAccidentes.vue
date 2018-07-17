<template>
  <main id="CardAccidentes">
        <div><b>{{ accidents.nombre }} </b></div>

          <div class="small-width">{{ accidents.descripcion }}</div>
          <div><b>Fecha:</b> {{fecha(accidents.fecha)}} </div>
          <div><b>Heridos:</b> {{ accidents.heridos }} personas</div>
          <div><b>Fallecidos:</b> {{ accidents.muertos }} personas</div>
          <div v-if="accidents.atendidoEnEmpresa === 0">No fue atendido en la empresa</div>
          <div v-if="accidents.atendidoEnEmpresa === 1">Fue atendido en la empresa</div>
          <v-btn
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(accidents, fecha(accidents.fecha))"
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
          <DialogEditarAccidentes
          :visible="visibleEdicion"
          :accidenteNombre="accidenteNombre"
          :accidenteDescripcion="accidenteDescripcion"
          :accidenteFecha="accidenteFecha"
          :accidenteHeridos="accidenteHeridos"
          :accidenteMuertos="accidenteMuertos"
          :accidenteAtendidoEnEmpresa="accidenteAtendidoEnEmpresa"
          :accidenteId="accidenteId"
          :accidentePuestoId="accidentePuestoId"
          @close="visibleEdicion=false"
          ></DialogEditarAccidentes>
  </main>
</template>
<script>
import DialogEditarAccidentes from './Editar/DialogEditarAccidentes'
const moment = require('moment')
export default {
  props: [ 'accidente' ],
  components: { DialogEditarAccidentes },
  data () {
    return {
      visibleEdicion: false,
      accidenteNombre: '',
      accidenteDescripcion: '',
      accidenteFecha: '',
      accidenteHeridos: null,
      accidenteMuertos: null,
      accidenteAtendidoEnEmpresa: null,
      accidenteId: '',
      accidentePuestoId: ''
    }
  },
  computed: {
    accidents: {
      get () {
        return this.accidente
      }
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    visualizarEditar (accidente, fecha) {
      this.accidenteNombre = accidente.nombre
      this.accidenteDescripcion = accidente.descripcion
      this.accidenteFecha = fecha
      this.accidenteHeridos = accidente.heridos
      this.accidenteMuertos = accidente.muertos
      if (accidente.atendidoEnEmpresa === 0) {
        this.accidenteAtendidoEnEmpresa = false
      } else {
        this.accidenteAtendidoEnEmpresa = true
      }
      this.accidenteId = accidente.id
      console.log(accidente.id)
      this.accidentePuestoId = accidente.puestosId
      this.visibleEdicion = true
    }
  }
}
</script>
