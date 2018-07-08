<template>
  <main id="DialogPuestosFromEstablecimientos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Establecimiento Matriz</v-toolbar-title>
      </v-toolbar>
      <h1 class="izq">Área: Producción 1</h1>
      <p class="izq">Descripción: Área 1 encargada de la elaboración y empaquetado de los pollos.</p>
      <p class="izq">Actividad: Proudcción y Empaquetado.</p>
      <h3 class="izq">Puestos de trabajo:</h3>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4>
            <CardPuestos></CardPuestos>
          </v-flex>
        </v-layout>
      </v-container>
      <h1 class="izq">Área: Producción 2</h1>
      <p class="izq">Descripción: Área 2 encargada de la elaboración y empaquetado de los pollos.</p>
      <p class="izq">Actividad: Proudcción y Empaquetado.</p>
      <h3 class="izq">Puestos de trabajo:</h3>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4>
            <CardPuestos></CardPuestos>
          </v-flex>
        </v-layout>
      </v-container>

    </v-card>
    </v-dialog>
  </main>
</template>
<script>
import CardPuestos from './CardPuestos'
export default {
  components: { CardPuestos },
  name: 'DialogPuestos',
  props: ['visible'],
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
