<template>
  <main id="dashboard">
    <app-navbar></app-navbar>
    <h1>Dashboard</h1>
    <v-btn
      @click=" crearEmpresa"
    >
      Crear Empresa
    </v-btn>
    <v-btn
      @click=" verEmpresas"
    >
      Ver Empresas
    </v-btn>
    <v-btn
      @click="crearEstablecimiento"
    >
      Agregar Establecimiento
    </v-btn>

    <v-btn
      @click=" verPersonas"
    >
      Ver Personas
    </v-btn>

    <v-btn
      @click=" crearPersona"
    >
      Crear Personas
    </v-btn>
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
  name: 'dashboard',
  data () {
    return {
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    },
    crearEmpresa () {
      router.push('crearEmpresa')
    },
    crearPersona () {
      router.push('crearPersona')
    },
    verEmpresas () {
      this.$store.dispatch('getEmpresas')
        .then((resp) => {
          router.push('empresas')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verPersonas () {
      this.$store.dispatch('getPersonas')
        .then((resp) => {
          router.push('personas')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    crearEstablecimiento () {
      this.$store.dispatch('empresas')
      router.push('/crearEstablecimiento')
    }
  }
}
</script>

<style>
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
  margin-right: 55%;
}
</style>
