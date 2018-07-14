<template>
  <main id="DialogPuestosFromEstablecimientos">
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
        <v-toolbar-title>Establecimiento Matriz</v-toolbar-title>
      </v-toolbar>
      <h1>Área: Producción 1</h1>
      <h3>Puestos de trabajo:</h3>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4>
            <CardPuestos></CardPuestos>
          </v-flex>
        </v-layout>
      </v-container>
      <h1>Área: Producción 2</h1>
      <h3>Puestos de trabajo:</h3>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4>
            <CardPuestos></CardPuestos>
          </v-flex>
        </v-layout>
      </v-container>

    </v-card>
    </v-dialog>
  </template>
  </main>
</template>
<script>
import CardPuestos from './CardPuestos'
export default {
  components: { CardPuestos },
  data () {
    return {
      loading: false,
      valid: null,
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  mounted () {
    this.cargarDatos()
  },
  methods: {
    cargarDatos () {
      this.valid = null
      this.loading = true
      this.verAreas()
      this.loading = false
      this.valid = true
    },
    verAreas () {
      this.$store.dispatch('getAreas', this.establecimientoId)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verPuestos () {

    }
  },
  name: 'DialogPuestos',
  props: ['visible', 'establecimientoId'],
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
