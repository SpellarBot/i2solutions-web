<template>
  <main id="CardPuestos">
    <v-card>
      <h3>Empaquetado de Pollo</h3>
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
    </footer>
  </main>
</template>
<script>
import DialogPersonasFromPuestos from './DialogPersonasFromPuestos'
import DialogAccidentesFromPuestos from './DialogAccidentesFromPuestos'
export default {
  components: { DialogPersonasFromPuestos, DialogAccidentesFromPuestos },
  data () {
    return {
      visiblePersonas: false,
      visibleAccidentes: false
    }
  },
  methods: {
    visualizarPersonas () {
      this.visiblePersonas = true
    },
    visualizarAccidentes () {
      this.visibleAccidentes = true
    }
  }
}
</script>
