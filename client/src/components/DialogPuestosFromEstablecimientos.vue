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
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Establecimiento {{ this.establecimientoNombre }}</v-toolbar-title>
      </v-toolbar>
      <div v-for="(area,index1) in this.$store.getters.areasPuestos" :key="area.id">
      <h1>Área: {{ area.nombre }}</h1>
      <h3>Puestos de trabajo:</h3>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4 v-for="(puesto,index2) in area.puestos" :key="puesto.id">
            <CardPuestos
            :puesto = "puesto"
            :areaId = "area.id"
            :editMode = "editMode"
            :deleteMode = "deleteMode"
            :index1 = index1
            :index2 = index2
            ></CardPuestos>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

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
      editMode: 0,
      deleteMode: 0
    }
  },
  /* mounted () {
    this.cargarData()
  }, */
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      console.log(this.editMode)
      // this.verAreasPuestos()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    closing () {
      this.$store.dispatch('emptyAreasPuestos')
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
  name: 'DialogPuestosFromEstablecimientos',
  watch: {
    show () {
      this.cargarData()
    }
  },
  props: ['visible', 'establecimientoId', 'establecimientoNombre'],
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
