<template>
  <main id="DialogPuestosFromAreas">
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
        <v-toolbar-title>Área {{ this.areaNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Puestos de trabajo</h1>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4 v-for="(puesto,index) in this.$store.getters.puestos" :key="puesto.id">
            <CardPuestos
            :puesto = "puesto"
            :areaId = "idArea"
            :editMode = "editMode"
            :deleteMode = "deleteMode"
            :index = index
            ></CardPuestos>
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
      snackbar: false,
      editMode: 1,
      deleteMode: 1
    }
  },
  /* mounted () {
    this.cargarData()
  }, */
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      // this.verAreasPuestos()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    closing () {
      this.$store.dispatch('emptyPuestos')
      this.show = false
    },
    verAreasPuestos () {
      this.$store.dispatch('getPuestosFromEstablecimiento', this.establecimientoId)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    }
  },
  name: 'DialogPuestosFromAreas',
  watch: {
    show () {
      this.cargarData()
    }
  },
  props: ['visible', 'areaId', 'areaNombre'],
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
    },
    idArea: {
      get () {
        return this.areaId
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
