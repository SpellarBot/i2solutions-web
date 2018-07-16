<template>
  <main id="CardPuestos">
    <v-card>

      <h2>{{ puestos.nombre }}</h2>
      <v-btn
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(puestos, areasId)"
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
      <div class="small-width"><p>{{ puestos.descripcion }}</p></div>
      <span class="link" v-on:click="visualizarPersonas"> Número Personas: {{ puestos.cantidadPersonas }}</span>
      <span class="link" v-on:click="visualizarAccidentes"> Número Accidentes: {{ puestos.cantidadAccidentes }}</span>
      <span class="link" v-on:click="visualizarNovedadesFromPuestos(puestos.id,puestos.nombre)"> Novedades sin arender: {{ puestos.cantidadNovedadesSinAtender }}</span>
    </v-card>
    <footer>
      <DialogPersonasFromPuestos
    :visible="visiblePersonas"
    @close="visiblePersonas=false"
    ></DialogPersonasFromPuestos>
    <DialogAccidentesFromPuestos
    :visible="visibleAccidentes"
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
    @close="visibleNovedades=false"></DialogNovedadesFromPuestos>
    </footer>
  </main>
</template>
<script>
import DialogPersonasFromPuestos from './DialogPersonasFromPuestos'
import DialogAccidentesFromPuestos from './DialogAccidentesFromPuestos'
import DialogEditarPuestos from './Editar/DialogEditarPuestos'
import DialogNovedadesFromPuestos from './Novedades/DialogNovedadesFromPuestos'
export default {
  props: [ 'puesto', 'areaId' ],
  components: { DialogPersonasFromPuestos, DialogAccidentesFromPuestos, DialogEditarPuestos, DialogNovedadesFromPuestos },
  data () {
    return {
      visiblePersonas: false,
      visibleAccidentes: false,
      visibleEdicion: false,
      visibleNovedades: false,
      puestoNombre: '',
      puestoDescripcion: '',
      puestoId: '',
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
    visualizarAccidentes () {
      this.visibleAccidentes = true
    },
    visualizarNovedadesFromPuestos (puestoId, puestoNombre) {
      this.puestoId = puestoId
      this.puestoNombre = puestoNombre
      this.visibleNovedades = true
    },
    visualizarEditar (puesto, areaId) {
      console.log(puesto.descripcion)
      this.puestoNombre = puesto.nombre
      this.puestoDescripcion = puesto.descripcion
      this.puestoId = puesto.id
      this.areaIdEdit = areaId
      this.visibleEdicion = true
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
