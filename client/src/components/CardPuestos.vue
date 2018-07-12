<template>
  <main id="CardPuestos">
    <v-card>

      <h2>Empaquetado de Pollo</h2>
      <v-btn
              fab
              dark
              right
              small
              color="blue"
              absolute
              @click="visualizarEditar()"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              right
              small
              color="blue"
              absolute
              class="offseted"
            >
              <v-icon>delete</v-icon>
            </v-btn>
      <div class="small-width"><p> Puesto donde se realiza el empaquetado de pollo y se envía a distribución.</p></div>
      <span class="link" v-on:click="visualizarPersonas"> Número Personas: 1</span>
      <span class="link" v-on:click="visualizarAccidentes"> Número Accidentes: 1</span>
      <span class="link" v-on:click="visualizarNovedadesFromAreas"> Novedades sin arender: 1</span>
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
    @close="visibleEdicion=false"
    ></DialogEditarPuestos>
    <DialogNovedadesFromAreas
    :visible="visibleNovedades"
    @close="visibleNovedades=false"></DialogNovedadesFromAreas>
    </footer>
  </main>
</template>
<script>
import DialogPersonasFromPuestos from './DialogPersonasFromPuestos'
import DialogAccidentesFromPuestos from './DialogAccidentesFromPuestos'
import DialogEditarPuestos from './Editar/DialogEditarPuestos'
import DialogNovedadesFromAreas from './Novedades/DialogNovedadesFromAreas'
export default {
  components: { DialogPersonasFromPuestos, DialogAccidentesFromPuestos, DialogEditarPuestos, DialogNovedadesFromAreas },
  data () {
    return {
      visiblePersonas: false,
      visibleAccidentes: false,
      visibleEdicion: false,
      visibleNovedades: false
    }
  },
  methods: {
    visualizarPersonas () {
      this.visiblePersonas = true
    },
    visualizarAccidentes () {
      this.visibleAccidentes = true
    },
    visualizarNovedadesFromAreas () {
      this.visibleNovedades = true
    },
    visualizarEditar () {
      // luego aquí pondré los datos que debe recibir el dialog, por ahora no :v
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
