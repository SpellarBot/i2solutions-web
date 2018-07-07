<template>
  <main id="dashboard">
    <app-navbar></app-navbar>
    <h1>Empresas</h1>
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
      <v-flex xs12 md6 lg4>
        <v-card
        hover
        @click.native="dashboardEstablecimientos(0)">
          <v-card-media class="white--text"
            src="https://www.dondevive.org/wp-content/uploads/2016/05/donde-viven-el-pollo.jpg"
            height="240px"
            width="320px"
            >
          </v-card-media>
          <h3>Los Pollos Hermanos 2</h3>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 lg4>
        <v-card
        hover
        @click.native="dashboardEstablecimientos(1)">
          <v-card-media class="white--text"
            src="http://mudanzasdiagonal.com/img/empaquetado-de-enseres.jpg"
            height="240px"
            width="320px"
            >
          </v-card-media>
          <h3>Empaquetados Mendoza</h3>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 lg4>
        <v-card
        hover
        @click.native="dashboardEstablecimientos(2)">
          <v-card-media class="white--text"
            src="https://www.articlesplanet.info/wp-content/uploads/2018/05/Tech-sector.jpg"
            height="240px"
            width="320px"
            >
          </v-card-media>
          <h3>Encotech</h3>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
    <!--v-btn
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
    </v-snackbar-->
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
    },
    dashboardEstablecimientos (empresaId) {
      console.log(empresaId)
      router.push({ name: 'DashboardEstablecimiento', params: { empresaId: empresaId } })
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
