<template>
  <main id="CardPuestos">
    <v-card>

      <h2>{{ puestos.nombre }}</h2>

      <div class="small-width"><p>{{ puestos.descripcion }}</p></div>
      <v-btn
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(puestos, areasId)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <!--Eliminar Puesto-->
            <v-btn
              fab
              dark
              small
              color="blue"
              @click="eliminarPuesto(puestos)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
      <span class="link" v-on:click="visualizarPersonas"> Número Personas: {{ puestos.cantidadPersonas }}</span>
      <span class="link" v-on:click="visualizarAccidentes(puestos)"> Número Accidentes: {{ puestos.cantidadAccidentes }}</span>
      <span class="link" v-on:click="visualizarNovedadesFromPuestos(puestos.id,puestos.nombre)"> Novedades sin arender: {{ puestos.cantidadNovedadesSinAtender }}</span>
      <span class="link" v-on:click="visualizarEquipos(puestos.id,puestos.nombre)"> Equipos: {{ puestos.cantidadEquipos }}</span>
      <span class="link" v-on:click="visualizarRiesgos(puestos.id,puestos.nombre)"> Riesgos: {{ puestos.cantidadRiesgos }}</span>
    </v-card>
    <footer>
      <!--Para Eliminar Establecimientos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogPuestos" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este Puesto?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogPuestos = false">No</v-btn>
            <v-btn color="blue darken-1" flat @click = "borrarPuesto()">Sí</v-btn>
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

      <DialogPersonasFromPuestos
    :visible="visiblePersonas"
    @close="visiblePersonas=false"
    ></DialogPersonasFromPuestos>
    <DialogAccidentesFromPuestos
    :visible="visibleAccidentes"
    :puestoId="puestoId"
    @close="visibleAccidentes=false"
    ></DialogAccidentesFromPuestos>
    <DialogEditarPuestos
    :visible="visibleEdicion"
    :puestoNombre="puestoNombre"
    :puestoDescripcion="puestoDescripcion"
    :puestoId="puestoId"
    :areaId="areaIdEdit"
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
export default {
  props: [ 'puesto', 'areaId' ],
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
    }
  },
  methods: {
    visualizarPersonas () {
      this.visiblePersonas = true
    },
    visualizarAccidentes (puesto) {
      this.puestoNombre = puesto.nombre
      this.puestoId = puesto.id
      this.visibleAccidentes = true
    },
    visualizarNovedadesFromPuestos (puestoId, puestoNombre) {
      if (this.puestos.cantidadNovedadesSinAtender > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.visibleNovedades = true
      }
    },
    visualizarRiesgos (puestoId, puestoNombre) {
      if (this.puestos.cantidadEquipos > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.visibleRiesgos = true
      }
    },
    visualizarEquipos (puestoId, puestoNombre) {
      // if (this.puestos.cantidadEquipos > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.visibleEquipos = true
      // }
    },
    visualizarEditar (puesto, areaId) {
      console.log(puesto.descripcion)
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
    /* reloadEstablecimiento () {
      this.$store.dispatch('getEstablecimientosFront', this.id)
      this.$store.dispatch('getEmpresaSola', this.id)
        .then((resp) => {
          router.push('DashboardEstablecimiento')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    } */
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
