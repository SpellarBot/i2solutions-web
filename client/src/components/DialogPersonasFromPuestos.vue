<template>
  <main id="DialogPersonasFromPuestos">
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
    ></v-progress-circular>
  </div>
    </template>
    <template class="content" v-if="valid">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ this.puestoNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Personas: </h1>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
        <v-card class='mb-4' v-for="(persona, indexP) in this.$store.getters.personas" :key="persona.id">
          <CardPersonas
          :persona="persona"
          :indexP="indexP"
          :deleteMode="deleteMode"
          :personasId="persona.id"
          ></CardPersonas>
        </v-card>
      </v-flex>
      </v-layout>
    </v-card>
    </v-dialog>
  </template>
  </main>
</template>
<script>
import CardPersonas from './CardPersonas'
export default {
  components: { CardPersonas },
  data () {
    return {
      loading: false,
      valid: null,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      deleteMode: 3
    }
  },
  watch: {
    show () {
      this.cargarData()
    }
  },
  name: 'DialogPersonas',
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    closing () {
      this.$store.dispatch('emptyPersonas')
      this.show = false
    }
  },
  props: ['visible', 'puestoId', 'puestoNombre'],
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
