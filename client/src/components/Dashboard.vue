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
      <h2>Empresas</h2>
      <br>
      <v-layout row wrap>
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
            >
            <v-flex xs12>
              <div v-if="empresa.tieneNovedades">
                  <div class = "btn--plain rotate-25 notification">
                    <img src="../assets/notification.gif">
                  </div>
              </div>
            </v-flex>
            <div>
              <v-card-title  class="justify-center">
                <p class="headline">{{empresa.nombre}}</p>
              </v-card-title>
              <v-card-media class="white--text"
                :src=empresa.urlFoto
                height="180px"
                contain
                style="padding: 20px"
                @click.native="dashboardEstablecimientos(empresa.id)"
                >
              </v-card-media>
          </div>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
    <footer class="clearer">
      <v-btn
        relative
        fab
        @click.native="agregarDialog=true"
        class = "bottom-right-corner"
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
      //carga las empresas del sistema. Retorna la lista de empresas
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
    /*verPersonas () {
      this.$store.dispatch('getPersonas')
        .then((resp) => {
          router.push('personas')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },*/
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
.rotate-25 {
  filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=0.3);
  -webkit-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);
  display: inline-block;
}
.bottom-right-corner {
  position: absolute;
  right:    0;
  bottom:   0;
  margin-right: 3%;
  margin-bottom: 2%;
}
.btn--plain:not(.btn--plain):hover {
  height: auto;
  width: auto;
  margin: 0;
  padding: 6px;
  min-width: 0;
  z-index: 5;
  > .btn__content {
    padding: 0;
    opacity: 0;
  }
  &:hover {
    background-color: transparent;
    opacity: 0;
    > .btn__content {
      opacity: 0;
    }
  }
}
.notification {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: transparent;
}
.notification:hover {
  background-color: transparent;
}
</style>
