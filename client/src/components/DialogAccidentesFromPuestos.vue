<template>
  <main id="DialogAccidentesFromPuestos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Producción 1 - Empaquetado de Pollo</v-toolbar-title>
      </v-toolbar>
      <h1>Accidentes: </h1>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
        <v-card class='mb-4'>
          <CardAccidentes></CardAccidentes>
        </v-card>
      </v-flex>
      </v-layout>
    </v-card>
    </v-dialog>
  </main>
</template>
<script>
import CardAccidentes from './CardAccidentes'
export default {
  components: { CardAccidentes },
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
