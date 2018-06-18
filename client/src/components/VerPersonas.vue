<template>
  <main id='Personas'>
    <app-navbar></app-navbar>
  <div class="personas in this.$store.getters.personas">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>Personas:</h1>
        <v-card class='mb-4' v-for="personas in this.$store.getters.personas" :key="personas.id">
          <div><b>Nombres y Apellido: </b> {{ personas.nombres }} {{personas.apellidos}}</div>
          <div><b>Rol: </b> {{ personas.rol}}</div>
          <div><b>Correo:</b> {{ personas.correo }}</div>
          <div><b>Cédula:</b> {{ personas.cedula }}</div>
          <div><b>Telefono:</b> {{ personas.telefono }}</div>
          <div><b>Fecha de Nacimiento: </b>{{ fecha(personas.fechaDeNaciemieno) }}</div>
          <div><b>Perfil Ocupacional:</b> {{ personas.perfilOcupacional }}</div>
          <div><b>usuario:</b> {{ personas.usuario }}</div>
          <v-btn
            @click="editarPersona(personas)"
          >
            Editar
          </v-btn>
          <v-btn
            @click="dashboard"
            color="primary" dark
          >
            Eliminar
          </v-btn>
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
const moment = require('moment')

export default {
  data () {
    return {
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  /* computed: {
    personasOrdenadas: function () {
      return this.$store.getters.personas.filter(function (persona) {
        return persona.fechaNacimiento
      })
    }
  }, */
  methods: {
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    },
    dashboard () {
      router.push('dashboard')
    },
    fecha: function (date) {
      return moment(date).format('L')
    },
    editarPersona (persona) {
      let personasId = persona.id
      this.$store.dispatch('getPersonaSola', personasId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Persona Encontrada.'
          this.color = 'success'
          router.push('editarPersona')
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
