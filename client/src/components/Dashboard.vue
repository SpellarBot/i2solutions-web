<template>
  <main id="dashboard">
    <app-navbar></app-navbar>
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
    Cargando...
  </div>
</template>
<template v-if="done">
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
          v-for="(empresa,index) in this.$store.getters.empresas" :key="empresa.id"
          xs10
          md4
        >
          <div v-if="index%3 == 0 && index > 0"> </div>
            <v-card
            :class="'empresa' + empresa.id"
            height="100%"
            raised
            hover
            @click.native="dashboardEstablecimientos(empresa.id)"
            >
            <div v-if="empresa.tieneNovedades">
              <v-btn
                absolute
                top
                right
                icon
                depressed
                class = "btn--plain"
                >
                <v-icon color="orange darken-1">priority_high</v-icon>
              </v-btn>
            </div>
            <v-card-title  class="justify-center">
              <p class="headline" >{{empresa.nombre}}</p>
            </v-card-title>
            <v-card-media class="white--text"
              :src=empresa.urlFoto
              height="180px"
              contain
              style="padding: 20px"
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
    <footer class="clearer">
      <v-btn
        top
        right
        relative
        fab
        @click.native="agregarDialog=true"
        >
        <v-icon>add</v-icon>
      </v-btn>
      <agregarEmpresa
      :visible="agregarDialog"
      @close="agregarDialog=false; cargarDatos()"
      ></agregarEmpresa>
    </footer>
  </template>
  </main>
</template>

<script>
import router from '../router'
import agregarEmpresa from './Agregar/agregarEmpresa'
export default {
  name: 'dashboard',
  components: {
    agregarEmpresa
  },
  data () {
    return {
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      agregarDialog: false,
      loading: false,
      done: null
    }
  },
  mounted () {
    this.cargarDatos()
  },
  methods: {
    cargarDatos () {
      this.done = null
      this.loading = true
      this.verEmpresas()
      this.loading = false
      this.done = true
    },
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
          console.log('Done')
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
.clearer {
  clear: both;
}
.btn--plain {
  height: auto;
  width: auto;
  margin: 0;
  padding: 6px;
  min-width: 0;
  > .btn__content {
    padding: 0;
    opacity: 0.75;
    &:before {
      background-color: transparent !important;
      transition: none !important;
    }
  }
  &:hover {
    > .btn__content {
      opacity: 1;
    }
  }
}
</style>
