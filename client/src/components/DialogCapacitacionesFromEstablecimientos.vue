<template>
  <main id="DialogCapacitacionesFromEstablecimientos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Establecimiento Matriz</v-toolbar-title>
      </v-toolbar>
      <h1>Capacitaciones: </h1>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
        <v-card class='mb-4'>
          <CardCapacitaciones></CardCapacitaciones>
          <div><b>Área de trabajo:</b> Producción 1</div>
        </v-card>
        <v-card class='mb-4'>
          <CardCapacitaciones></CardCapacitaciones>
          <div><b>Área de trabajo:</b> Producción 2</div>
        </v-card>
      </v-flex>
      </v-layout>
    </v-card>
    </v-dialog>
  </main>
</template>
<script>
import CardCapacitaciones from './CardCapacitaciones'
export default {
  components: { CardCapacitaciones },
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
