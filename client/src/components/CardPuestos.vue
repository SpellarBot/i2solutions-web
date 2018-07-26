<template>
  <main id="CardPuestos">
    <v-card>

      <h2>{{ puestos.nombre }}</h2>

      <div class="small-width"><p>{{ puestos.descripcion }}</p></div>
      <v-btn
      :class="'editarPuesto' + puestos.id"
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(puestos, areasId)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <!--Eliminar Puesto-->
            <v-btn
              fab
              dark
              small
              color="blue"
              :class="'eliminarPuesto' + puestos.id"
              @click="eliminarPuesto(puestos)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>delete</v-icon>
            </v-btn>
            <div v-if="puestos.cantidadPersonas>0">
      <span class="link" v-on:click="visualizarPersonas(puestos)"> Número Personas: {{ puestos.cantidadPersonas }}</span>
    </div>
    <div v-if="puestos.cantidadPersonas===0">
      <span> Número Personas: {{ puestos.cantidadPersonas }}</span>
    </div>
    <div v-if="puestos.cantidadAccidentes>0">
      <span :class="'accidentesPuesto' + puestos.id" class="link" v-on:click="visualizarAccidentes(puestos)"> Número Accidentes: {{ puestos.cantidadAccidentes }}</span>
    </div>
    <div v-if="puestos.cantidadAccidentes===0">
      <span :class="'accidentesPuesto' + puestos.id"> Número Accidentes: {{ puestos.cantidadAccidentes }}</span>
    </div>
    <div v-if="puestos.cantidadNovedadesSinAtender>0">
      <span class="link" v-on:click="visualizarNovedadesFromPuestos(puestos.id,puestos.nombre)"> Novedades sin arender: {{ puestos.cantidadNovedadesSinAtender }}</span>
    </div>
    <div v-if="puestos.cantidadNovedadesSinAtender===0">
      <span> Novedades sin arender: {{ puestos.cantidadNovedadesSinAtender }}</span>
    </div>
    <div v-if="puestos.cantidadEquipos>0">
      <span  :class="'equiposPuesto' + puestos.id" class="link" v-on:click="visualizarEquipos(puestos.id,puestos.nombre)"> Equipos: {{ puestos.cantidadEquipos }}</span>
    </div>
    <div v-if="puestos.cantidadEquipos===0">
      <span  :class="'equiposPuesto' + puestos.id"> Equipos: {{ puestos.cantidadEquipos }}</span>
    </div>
    <div v-if="puestos.cantidadRiesgos>0">
      <span :class="'riesgosPuesto' + puestos.id" class="link" v-on:click="visualizarRiesgos(puestos.id,puestos.nombre)"> Riesgos: {{ puestos.cantidadRiesgos }}</span>
    </div>
    <div v-if="puestos.cantidadRiesgos===0">
      <span :class="'riesgosPuesto' + puestos.id"> Riesgos: {{ puestos.cantidadRiesgos }}</span>
    </div>
    </v-card>
    <footer>
    <DialogPersonasFromPuestos
    :visible="visiblePersonas"
    :puestoId="puestoId"
    :puestoNombre="puestoNombre"
    @close="visiblePersonas=false"
    ></DialogPersonasFromPuestos>
    <DialogAccidentesFromPuestos
    :visible="visibleAccidentes"
    :puestoId="puestoId"
    :puestoNombre="puestoNombre"
    @close="visibleAccidentes=false"
    ></DialogAccidentesFromPuestos>
    <DialogEditarPuestos
    :visible="visibleEdicion"
    :puestoNombre="puestoNombre"
    :puestoDescripcion="puestoDescripcion"
    :puestoId="puestoId"
    :areaId="areaIdEdit"
    :editMode="editModes"
    @close="visibleEdicion=false"
    ></DialogEditarPuestos>
    <DialogNovedadesFromPuestos
    :visible="visibleNovedades"
    :puestoNombre ="puestoNombre"
    :puestoId="puestoId"
    @close="visibleNovedades=false">
    </DialogNovedadesFromPuestos>
    <DialogRiesgosFromPuestos
    :visible="visibleRiesgos"
    :puestoNombre ="puestoNombre"
    :puestoId="puestoId"
    @close="visibleRiesgos=false">
    </DialogRiesgosFromPuestos>
    <DialogEquiposFromPuestos
    :visible="visibleEquipos"
    :puestoNombre ="puestoNombre"
    :puestoId="puestoId"
    @close="visibleEquipos=false">
    </DialogEquiposFromPuestos>
    <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>

    <!--Para Eliminar Puestos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogPuestos" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este Puesto?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :class="'borrarPuesto' + this.puestoSelected" color="blue darken-1" flat @click = "borrarPuesto()">Sí</v-btn>
            <v-btn color="blue" flat @click.native="eliminarDialogPuestos = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    </footer>
  </main>
</template>
<script>
import DialogPersonasFromPuestos from './DialogPersonasFromPuestos'
import DialogAccidentesFromPuestos from './DialogAccidentesFromPuestos'
import DialogEditarPuestos from './Editar/DialogEditarPuestos'
import DialogNovedadesFromPuestos from './Novedades/DialogNovedadesFromPuestos'
import DialogRiesgosFromPuestos from './Riesgos/DialogRiesgosFromPuestos'
import DialogEquiposFromPuestos from './Equipos/DialogEquiposFromPuestos'
// import index from '../router'
export default {
  props: [ 'puesto', 'areaId', 'editMode', 'deleteMode', 'index1', 'index2' ],
  components: { DialogPersonasFromPuestos, DialogAccidentesFromPuestos, DialogEditarPuestos, DialogNovedadesFromPuestos, DialogRiesgosFromPuestos, DialogEquiposFromPuestos },
  data () {
    return {
      visiblePersonas: false,
      visibleAccidentes: false,
      visibleEdicion: false,
      visibleNovedades: false,
      visibleRiesgos: false,
      visibleEquipos: false,
      eliminarDialogPuestos: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      puestoNombre: '',
      puestoDescripcion: '',
      puestoId: '',
      puestoSelected: 0,
      areaIdEdit: ''
    }
  },
  computed: {
    puestos: {

      get () {
        return this.puesto
      }
    },
    areasId: {
      get () {
        return this.areaId
      }
    },
    editModes: {
      get () {
        return this.editMode
      }
    }
  },
  methods: {
    visualizarPersonas (puesto) {
      this.puestoId = puesto.id
      this.puestoNombre = puesto.nombre
      this.verPersonas()
    },
    verPersonas () {
      this.$store.dispatch('getPersonasFromPuesto', this.puestoId)
        .then((resp) => {
          console.log('Done')
          this.visiblePersonas = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarAccidentes (puesto) {
      this.puestoNombre = puesto.nombre
      this.puestoId = puesto.id
      this.verAccidentes()
    },
    verAccidentes () {
      console.log(this.puestoId)
      this.$store.dispatch('getAccidentesFromPuesto', this.puestoId)
        .then((resp) => {
          console.log('Done')
          this.visibleAccidentes = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarNovedadesFromPuestos (puestoId, puestoNombre) {
      if (this.puestos.cantidadNovedadesSinAtender > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.visibleNovedades = true
      }
    },
    visualizarRiesgos (puestoId, puestoNombre) {
      // if (this.puestos.cantidadEquipos > 0) {
      this.puestoId = puestoId
      this.puestoNombre = puestoNombre
      this.visibleRiesgos = true
      // }
    },
    visualizarEquipos (puestoId, puestoNombre) {
      if (this.puestos.cantidadEquipos > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.visibleEquipos = true
      }
    },
    visualizarEditar (puesto, areaId) {
      console.log(this.editModes)
      this.puestoNombre = puesto.nombre
      this.puestoDescripcion = puesto.descripcion
      this.puestoId = puesto.id
      this.areaIdEdit = areaId
      this.visibleEdicion = true
    },
    eliminarPuesto (puesto) {
      this.$data.puestoSelected = puesto.id
      console.log(this.$data.puestoSelected)
      this.eliminarDialogPuestos = true
    },
    borrarPuesto () {
      this.eliminarDialogPuestos = false
      let puestosId = Number(this.puestoSelected)
      console.log('idPuesto', puestosId)
      this.$store.dispatch('deletePuesto', puestosId)
        .then((resp) => {
          console.log('entre')
          this.snackbar = true

          if (this.deleteMode === 1) {
            this.$store.getters.puestos.splice(this.index, 1)
          } else {
            this.$store.getters.areasPuestos[this.index1].puestos.splice(this.index2, 1)
          }
          this.mensajeSnackbar = 'Puesto borrado con exito.'
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
  .offseted {
  top: 6.5em;
}
.small-width {
  width: 70%;
  margin-left: 15%;
}
</style>
