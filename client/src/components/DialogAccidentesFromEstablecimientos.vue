<template>
  <main id="DialogAccidentesFromEstablecimientos">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Establecimiento {{ this.establecimientoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Accidentes: </h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg4 v-for="(accidente) in this.$store.getters.accidentes" :key="accidente.id">
        <v-card class='mb-4' >
          <CardAccidentes
          :accidente="accidente"
          ></CardAccidentes>
          <div><b>Puesto de trabajo:</b> {{ accidente.areasNombre }}</div>
          <div><b>Área de trabajo:</b> {{ accidente.puestosNombre }}</div>
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
  name: 'DialogAccidentesFromEstablecimientos',
  props: ['visible', 'establecimientoId', 'establecimientoNombre'],
  watch: {
    show () {
      this.cargarData()
    }
  },
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
  },
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      // this.verAccidentes()
      this.loading = false
      this.valid = true
    },
    closing () {
      this.$store.dispatch('emptyAccidentes')
      this.show = false
    },
    verAccidentes () {
      console.log(this.establecimientoId)
      this.$store.dispatch('getAccidentesFromEstablecimiento', this.establecimientoId)
        .then((resp) => {
          console.log('Done')
          console.log(this.$store.getters.accidentes)
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
