<template>
  <main id="DialogAccidentesFromPuestos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ this.puestoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Accidentes: </h1>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
        <v-card class='mb-4' v-for="(accidente,indexP) in this.$store.getters.accidentes" :key="accidente.id">
          <CardAccidentes
          :accidente="accidente"
          :indexP="indexP"
          :deleteMode="deleteMode"
          ></CardAccidentes>
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
  props: ['visible', 'puestoId', 'puestoNombre'],
  data () {
    return {
      deleteMode: 0
    }
  },
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
      this.verAccidentes()
      this.loading = false
      this.valid = true
    },
    verAccidentes () {
      console.log(this.puestoId)
      this.$store.dispatch('getAccidentesFromPuesto', this.puestoId)
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
