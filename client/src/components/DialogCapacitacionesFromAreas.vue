<template>
  <main id="DialogCapacitacionesFromEstablecimientos">
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
    ></v-progress-circular>
  </div>
    </template>
    <template class="content" v-if="valid">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Área {{ this.areaNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Capacitaciones: </h1>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
        <v-card class='mb-4' v-for="(capacitacion) in this.$store.getters.capacitaciones" :key="capacitacion.id">
          <CardCapacitaciones
          :capacitacion="capacitacion"
          ></CardCapacitaciones>
        </v-card>
      </v-flex>
      </v-layout>
    </v-card>
    </v-dialog>
  </template>
  </main>
</template>
<script>
import CardCapacitaciones from './CardCapacitaciones'
export default {
  components: { CardCapacitaciones },
  data () {
    return {
      loading: false,
      valid: null,
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  name: 'DialogCapacitaciones',
  props: ['visible', 'areaId', 'areaNombre'],
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
      this.verCapacitaciones()
      this.loading = false
      this.valid = true
    },
    verCapacitaciones () {
      console.log(this.establecimientoId)
      this.$store.dispatch('getCapacitacionesFromArea', this.areaId)
        .then((resp) => {
          console.log('Done')
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
