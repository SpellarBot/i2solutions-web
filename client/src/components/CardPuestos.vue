<template>
  <main id="CardPuestos">
    <v-card>
      <v-toolbar dark color="primary">

      <v-toolbar-title class="text-xs-center">Empaquetado de Pollo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
              icon
              dark
              @click="visualizarEditar()"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              icon
              dark
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </v-toolbar>
      <p> Puesto donde se realiza el empaquetado de pollo y se envía a distribución.</p>
      <span class="link" v-on:click="visualizarPersonas"> Número Personas: 1</span>
      <span class="link" v-on:click="visualizarAccidentes"> Número Accidentes: 1</span>
      <span class="link"> Novedades sin arender: 1</span>
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
    </footer>
  </main>
</template>
<script>
import DialogPersonasFromPuestos from './DialogPersonasFromPuestos'
import DialogAccidentesFromPuestos from './DialogAccidentesFromPuestos'
import DialogEditarPuestos from './Editar/DialogEditarPuestos'
export default {
  components: { DialogPersonasFromPuestos, DialogAccidentesFromPuestos, DialogEditarPuestos },
  data () {
    return {
      visiblePersonas: false,
      visibleAccidentes: false,
      visibleEdicion: false
    }
  },
  methods: {
    visualizarPersonas () {
      this.visiblePersonas = true
    },
    visualizarAccidentes () {
      this.visibleAccidentes = true
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
</style>
