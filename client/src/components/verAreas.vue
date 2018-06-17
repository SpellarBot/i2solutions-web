<template>
  <main id='Areas'>
    <app-navbar></app-navbar>
     <div class="areas in this.$store.getters.areas">
       <br><br><b></b>

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>Areas:</h1>
        <v-spacer></v-spacer>
        <v-card class='mb-4' v-for="areas in this.$store.getters.areas" :key="areas.id">
          <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg
          >
          <v-card-media class="white--text"
                  :src="areas.fotoUrl"
                  height="240px"
                  width="320px"
          >{{ areas.metrosCuadrados }}m²</v-card-media>
          <v-spacer></v-spacer>
          <div class="headline"><b>Area: </b> {{ areas.nombre}}</div>
          <div><b>actividad:</b> {{ areas.actividad }}</div>
          <div><span class="grey--text"><b>Descripción:</b> {{ areas.descripcionLugar }}</span></div>
          <v-btn
            @click="editarArea(areas)"
          >
            Editar
          </v-btn>
          <v-btn
            @click="dashboard"
          >
            Eliminar
          </v-btn>
          </v-container>

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
      return moment().format('L')
    },
    editarArea (area) {
      let areaId = area.id
      this.$store.dispatch('getAreaSola', areaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Area Encontrada.'
          this.color = 'success'
          router.push('editarArea')
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
