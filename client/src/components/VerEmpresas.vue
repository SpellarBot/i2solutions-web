<template>
  <main id='Empresas'>
    <app-navbar></app-navbar>
  <div class="empresas in this.$store.getters.empresas">
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>Empresas:</h1>
        <v-card class='mb-4' v-for="empresa in this.$store.getters.empresas" :key="empresa.id">
          <h3>{{ empresa.nombre }}</h3>
          <div>{{ empresa.actividadComercial }}</div>
          <div>{{ empresa.razonSocial }}</div>
          <div>{{ empresa.ruc }}</div>
          <v-btn
          :class="empresa.nombre"
            @click="editarEmpresa(empresa)"
          >
            Editar
          </v-btn>
          <v-btn
          :class="empresa.nombre"
            @click="verEstablecimientos(empresa)"
          >
            ver establecimientos
          </v-btn>

          <v-dialog v-model="dialog" persistent max-width="500">
            <v-btn :class="empresa.nombre" slot=activator color="primary" dark @click="setId(empresa)">Eliminar</v-btn>
            <v-card>
              <v-card-title class="headline">¿Está seguro que quiere eliminar esta empresa?"</v-card-title>
              <v-card-actions>
                <v-btn flat @click.native="dialog = false">No</v-btn>
                <v-btn :class="empresa.nombre" color= blue  flat @click = "onConfirm(empresa)">Sí</v-btn>
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
    editarEmpresa (empresa) {
      let empresaId = empresa.id
      this.$store.dispatch('getEmpresaSola', empresaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa Encontrada.'
          this.color = 'success'
          router.push('editarEmpresa')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verEstablecimientos (empresa) {
      let empresaId = empresa.id
      this.$store.dispatch('getEstablecimientos', empresaId)
      this.$store.dispatch('getEmpresaSola', empresaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Establecimientos Encontrados.'
          this.color = 'success'
          router.push('EstablecimientoVer')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    setId (empresa) {
      this.id_eliminar = empresa.id
    },
    onConfirm (empresa) {
      this.dialog = false
      let empresaId = this.id_eliminar
      console.log(empresaId)
      this.$store.dispatch('deleteEmpresa', empresaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa Eliminada.'
          this.color = 'success'
          this.$store.dispatch('getEmpresas')
            .then((resp) => {
              console.log('no error')
              router.push('empresas')
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
