<template>
  <main id="dashboardEstablecimiento">
    <app-navbar></app-navbar>
    <template v-if="loading">
      Cargando...
    </template>
    <template class="error" v-if="error">
      {{ error }}
    </template>
    <template class="content" v-if="valid">
    <h1>Empresa: "{{ nombreEmpresa() }}"</h1>
    <br>
    <h2>Establecimientos</h2>
    <v-container grid-list-md>
      <v-layout row wrap>
        <!--v-flex xs12 md6 lg4 v-for="i in 9" :key="i">
          <v-card>
            <v-card-media class="white--text"
            src="http://lorempixel.com/640/480"
            height="240px"
            width="320px"
            >
          </v-card-media>
          Los Pollos Hermanos 2
        </v-card>
      </v-flex-->
      <v-flex xs12 md6 lg4 v-if="this.id === 0">
        <v-card>
          <h3>Matriz</h3>
          <p> Dirección: Kennedy Nueva. Av. Orión Llaguno Márquez</p>
          <p> RUC: 1310539752001</p>
          <span class="link"> Número Áreas: 2</span>
          <span class="link" v-on:click="visualizarPuestos"> Número Puestos: 2</span>
          <span class="link" v-on:click="visualizarPersonas"> Número Personas: 2</span>
          <span class="link" v-on:click="visualizarAccidentes"> Número Accidentes: 2</span>
          <span class="link" v-on:click="visualizarCapacitaciones"> Número Capacitaciones: 2</span>
          <span class="link"> Novedades sin arender: 2</span>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 lg4 v-if="this.id === 1">
        <v-card>
          <h3>Matriz</h3>
          <p> Dirección: Alborada</p>
          <p> RUC: 1310539752001</p>
          <span class="link"> Número Áreas: 1</span>
          <span class="link"> Número Puestos: 1</span>
          <span class="link"> Número Personas: 3</span>
          <span class="link"> Número Accidentes: 0</span>
          <span class="link"> Número Capacitaciones: 0</span>
          <span class="link"> Novedades sin arender: 1</span>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 lg4 v-if="this.id === 2">
        <v-card>
          <h3>Matriz</h3>
          <p> Dirección: Terminal Terrestre</p>
          <p> RUC: 1310539752001</p>
          <span class="link"> Número Áreas: 2</span>
          <span class="link"> Número Puestos: 3</span>
          <span class="link"> Número Personas: 4</span>
          <span class="link"> Número Accidentes: 1</span>
          <span class="link"> Número Capacitaciones: 1</span>
          <span class="link"> Novedades sin arender: 1</span>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

  </template>
    <footer>
    <DialogPuestosFromEstablecimientos
    :visible="visiblePuestos"
    @close="visiblePuestos=false"
    ></DialogPuestosFromEstablecimientos>
    <DialogPersonasFromEstablecimientos
    :visible="visiblePersonas"
    @close="visiblePersonas=false"
    ></DialogPersonasFromEstablecimientos>
    <DialogAccidentesFromEstablecimientos
    :visible="visibleAccidentes"
    @close="visibleAccidentes=false"
    ></DialogAccidentesFromEstablecimientos>
    <DialogCapacitacionesFromEstablecimientos
    :visible="visibleCapacitaciones"
    @close="visibleCapacitaciones=false"
    ></DialogCapacitacionesFromEstablecimientos>
  </footer>
  </main>

</template>

<script>
import router from '../router'
import DialogPuestosFromEstablecimientos from './DialogPuestosFromEstablecimientos'
import DialogPersonasFromEstablecimientos from './DialogPersonasFromEstablecimientos'
import DialogAccidentesFromEstablecimientos from './DialogAccidentesFromEstablecimientos'
import DialogCapacitacionesFromEstablecimientos from './DialogCapacitacionesFromEstablecimientos'
export default {
  components: {
    DialogPuestosFromEstablecimientos,
    DialogPersonasFromEstablecimientos,
    DialogAccidentesFromEstablecimientos,
    DialogCapacitacionesFromEstablecimientos
  },
  data () {
    return {
      loading: false,
      error: null,
      valid: null,
      id: -1,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      visiblePuestos: false,
      visiblePersonas: false,
      visibleAccidentes: false,
      visibleCapacitaciones: false
    }
  },
  created () {
    this.cargarDatos()
  },
  watch: {
    '$route.params.empresaId': function () {
      this.cargarDatos()
    }
  },
  methods: {
    cargarDatos () {
      this.error = this.valid = null
      this.loading = true
      this.id = Number(this.$route.params.empresaId)
      this.loading = false
      this.valid = true
    },
    nombreEmpresa () {
      if (this.id === 0) {
        return 'Los Pollos Hermanos 2'
      } else if (this.id === 1) {
        return 'Empaquetados Mendoza'
      } else if (this.id === 2) {
        return 'Encotech'
      } else {
        return 'Empresa No Válida'
      }
    },
    visualizarPuestos () {
      this.visiblePuestos = true
    },
    visualizarPersonas () {
      this.visiblePersonas = true
    },
    visualizarAccidentes () {
      this.visibleAccidentes = true
    },
    visualizarCapacitaciones () {
      this.visibleCapacitaciones = true
    },
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    },
    crearEmpresa () {
      router.push('/crearEmpresa')
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
.link {
  display: block;
  color: #448aff;
  cursor: pointer;
}
.link:hover {
  text-decoration: underline;
  color: rgba(68,138,255,0.8);
}
.link:focus {
  outline: -webkit-focus-ring-color auto 5px;
}
</style>
