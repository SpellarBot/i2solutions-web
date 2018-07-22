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
          :class="'editarAccidentes' + this.accidenteId"
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(accidents, fecha(accidents.fecha))"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
            :class="'eliminaAccident' + accidents.id "
              fab
              dark
              small
              color="blue"
              @click="eliminarAccidente(accidents)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <footer>
            <v-layout row justify-center>
            <v-dialog v-model="eliminarDialogAccidentes" persistent max-width="290">
              <v-card>
                <v-card-title class="headline">Eliminar</v-card-title>
                <v-card-text>¿Está seguro que quiere eliminar este Accidente?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue" flat @click.native="eliminarDialogAccidentes = false">No</v-btn>
                  <v-btn :class="'borrarAccidentes' + this.accidenteSelected" color="blue darken-1" flat @click = "borrarAccidente()">Sí</v-btn>
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
        </footer>
  </main>
</template>
<script>
import DialogEditarAccidentes from './Editar/DialogEditarAccidentes'
const moment = require('moment')
export default {
  props: [ 'accidente', 'indexE', 'indexP', 'deleteMode' ],
  components: { DialogEditarAccidentes },
  data () {
    return {
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
      visibleEdicion: false,
      accidenteNombre: '',
      accidenteDescripcion: '',
      accidenteFecha: '',
      accidenteHeridos: null,
      accidenteMuertos: null,
      accidenteAtendidoEnEmpresa: null,
      accidenteId: '',
      accidentePuestoId: '',
      accidenteSelected: 0,
      eliminarDialogAccidentes: false
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
    },
    eliminarAccidente (accidente) {
      this.accidenteSelected = accidente.id
      this.accidenteId = accidente.id
      console.log(this.accidenteSelected)
      this.eliminarDialogAccidentes = true
    },
    borrarAccidente () {
      this.eliminarDialogAccidentes = false
      let accidentesId = Number(this.accidenteSelected)
      console.log('accidentesId', accidentesId)
      this.$store.dispatch('deleteAccidentes', accidentesId)
        .then((resp) => {
          console.log('entre')
          this.mensajeSnackbar = 'Accidente borrado con exito.'
          this.color = 'success'
          if (this.deleteMode === 1) {
            this.$store.getters.accidentes.splice(this.indexE, 1)
          } else {
            this.$store.getters.accidentes.splice(this.indexP, 1)
            this.snackbar = true
          }
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
