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
            @click = "eliminarTrigger(areas.id)"
          >
            Eliminar
          </v-btn>
          </v-container>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
  <v-btn
    v-on:click="crearArea = true"
  >
    Agregar nueva área
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

  <v-layout row justify-center>
    <v-dialog v-model="crearArea" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Agregar nueva área</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex>
                <v-text-field
                  v-model = "nombre"
                  label="Nombre del área" required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model = "actividad"
                  label="Actividad" required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model = "dimension"
                  label="Metros cuadrados"
                  hint = "20x40m"
                  persistent-hint
                  required
                  >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model = "descripcion"
                  label = "Descripción"
                  required
                  multi-line
                  >
                  </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="crearArea = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click = "crear ()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <v-layout row justify-center>
    <v-dialog v-model="eliminarDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Eliminar</v-card-title>
        <v-card-text>¿Está seguro que quiere eliminar esta Área?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="eliminarDialog = false">No</v-btn>
          <v-btn color="green darken-1" flat @click = "eliminarArea()">Sí</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
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
      snackbar: false,
      crearArea: false,
      eliminarDialog: false,
      AreaIdSelected: 0,
      nombre: '',
      actividad: '',
      dimension: '',
      descripcion: '',
      establecimiento: this.$store.getters.establecimientoSelected
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
    },
    eliminarTrigger (areaId) {
      this.$data.AreaIdSelected = areaId
      this.$data.eliminarDialog = true
    },
    eliminarArea () {
      let areasId = this.$data.AreaIdSelected
      this.$store.dispatch('deleteArea', areasId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Area eliminada exitosamente.'
          this.color = 'success'
          this.reloadArea()
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
      this.$data.eliminarDialog = false
    },
    crear () {
      let nombre = this.$data.nombre
      let actividad = this.$data.actividad
      let metrosCuadrados = this.$data.dimension
      let descripcionLugar = this.$data.descripcion
      let fotoUrl = 'http://lorempixel.com/640/480'
      let establecimientosId = this.$store.getters.establecimientoSelected
      this.$store.dispatch('crearArea', { nombre, actividad, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Area creada exitosamente.'
          this.color = 'success'
          this.$data.crearArea = false
          this.reloadArea()          
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    reloadArea () {
      let establecimientoId = this.$data.establecimiento
      this.$store.dispatch('getAreas', establecimientoId)
        .then((resp) => {
          router.push('Areas')
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
