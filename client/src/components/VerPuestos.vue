<template>
  <main id='Puestos'>
    <app-navbar></app-navbar>
  <div class="puesto in this.$store.getters.puestos">
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>Empresas:</h1>
        <v-card class='mb-4' v-for="puesto in this.$store.getters.puestos" :key="puesto.id">
          <h3>{{ puesto.nombre }}</h3>
          <div>{{ puesto.descripcion }}</div>
          <v-btn
          :class="puesto.nombre"
            @click="editarPuesto(puesto)"
          >
            Editar
          </v-btn>

          <v-dialog v-model="dialog" persistent max-width="500">
            <v-btn :class="puesto.nombre" slot=activator color="primary" dark @click="setId(puesto)">Eliminar</v-btn>
            <v-card>
              <v-card-title class="headline">¿Está seguro que quiere eliminar este puesto?"</v-card-title>
              <v-card-actions>
                <v-btn flat @click.native="dialog = false">No</v-btn>
                <v-btn :class="puesto.nombre" color= blue  flat @click = "onConfirm(puesto)">Sí</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
        <v-btn
            @click="dashboard"
          >
            Regresar
          </v-btn>
      </v-flex>
    </v-layout>
  </div>
  <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
</main>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      dialog: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      id_eliminar: null
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    },
    dashboard () {
      router.push('dashboard')
    },
    editarPuesto (puesto) {
      let puestoId = puesto.id
      this.$store.dispatch('getPuestoSolo', puestoId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Puesto Encontrado.'
          this.color = 'success'
          router.push('editarPuesto')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    setId (puesto) {
      this.id_eliminar = puesto.id
    },
    onConfirm (puesto) {
      this.dialog = false
      let puestoId = this.id_eliminar
      console.log(puestoId)
      this.$store.dispatch('deletePuesto', puestoId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Puesto Eliminado.'
          this.color = 'success'
          this.$store.dispatch('getPuestos', this.$store.getters.areaSelected.id)
            .then((resp) => {
              console.log('no error')
              router.push('puestos')
            })
            .catch((err) => {
              this.color = 'error'
              this.snackbar = true
              this.mensajeSnackbar = err
              console.log('error 1')
            })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageLogo {
  background-color: #1394CE;
  padding: 10px;
  margin-bottom: 30px;
  text-align: left !important;
}
.i2s-name {
  text-align: left !important;
  padding: 20px;
  color: white;
  font-size: 40px;
}
</style>
