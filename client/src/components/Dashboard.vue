<template>
  <main id="dashboard">
    <app-navbar></app-navbar>
    <v-container grid-list-md>
      <br>
      <h2 class="text-md-left">Empresas</h2>
      <br>
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
        <v-flex
          v-for="(empresa,index) in empresas" :key="empresa.id"
          xs10 offset-xs1
          md4 offset-md0
        >
          <div v-if="index%3 == 0 && index > 0"> <br><br> </div>
            <v-card
            height="100%"
            raised
            hover
            @click.native="dashboardEstablecimientos(empresa.id)">
            <div v-if="empresa.novedad">
              !
            </div>
            <v-card-title  class="justify-center">
              <p class="headline" >{{empresa.nombre}}</p>
            </v-card-title>
            <v-card-media class="white--text"
              :src=empresa.imagen
              height="240px"
              >
            </v-card-media>
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
      snackbar: false,
      empresas: [
        {
          nombre: 'Los pollos hermanos 2',
          imagen: 'https://www.dondevive.org/wp-content/uploads/2016/05/donde-viven-el-pollo.jpg',
          novedad: true,
          id: 1
        },
        {
          nombre: 'Empaquetados Mendoza',
          imagen: 'http://mudanzasdiagonal.com/img/empaquetado-de-enseres.jpg',
          novedad: false,
          id: 2
        },
        {
          nombre: 'Encotech',
          imagen: 'https://www.articlesplanet.info/wp-content/uploads/2018/05/Tech-sector.jpg',
          novedad: false,
          id: 3
        },
        {
          nombre: 'Encotech',
          imagen: 'https://www.articlesplanet.info/wp-content/uploads/2018/05/Tech-sector.jpg',
          novedad: false,
          id: 3
        }

      ]
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
