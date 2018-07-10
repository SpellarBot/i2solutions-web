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
        <v-flex xs12 md5 lg4
        v-for="(establecimiento, index) in establecimientos"
        :key="establecimiento.ruc"
        v-if="establecimiento.idEmpresa === id">
          <v-card
          raised
          >
          <div v-if="index%3 == 0 && index > 0"> <br><br> </div>
            <v-card-title primary-title>
                <v-flex xs12>
                  <h3 class="headline mb-0">{{establecimiento.nombre}}</h3>
                </v-flex>
                <div>
                  <b>Dirección:</b> {{establecimiento.direccion}} <br>
                  <b>RUC:</b> {{establecimiento.ruc}}
                </div>
            </v-card-title>
            <v-card-text>
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex xs6 md6>
                      <span class="link"
                        v-on:click="visualizarAreas(establecimiento.ruc, establecimiento.nombre)"
                        > #Areas: {{establecimiento.numAreas}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarPuestos">#Puestos: {{establecimiento.numPuestos}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarPersonas">#Personas: {{establecimiento.numPersonas}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarAccidentes">#Accidentes: {{establecimiento.numAccidentes}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarCapacitaciones">#Capacitaciones: {{establecimiento.numCapacitaciones}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-card-text>
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
    <DialogAreas
    :visible="visibleAreas"
    :EstablecimientoId="establecimientoId"
    :nombreEstablecimiento="nombreEstablecimiento"
    @close="visibleAreas=false"
    ></DialogAreas>
  </footer>
  </main>

</template>

<script>
import router from '../router'
import DialogPuestosFromEstablecimientos from './DialogPuestosFromEstablecimientos'
import DialogPersonasFromEstablecimientos from './DialogPersonasFromEstablecimientos'
import DialogAccidentesFromEstablecimientos from './DialogAccidentesFromEstablecimientos'
import DialogCapacitacionesFromEstablecimientos from './DialogCapacitacionesFromEstablecimientos'
import DialogAreas from './Areas/verAreasDialog'
export default {
  components: {
    DialogPuestosFromEstablecimientos,
    DialogPersonasFromEstablecimientos,
    DialogAccidentesFromEstablecimientos,
    DialogCapacitacionesFromEstablecimientos,
    DialogAreas
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
      visibleCapacitaciones: false,
      visibleAreas: false,
      establecimientoId: '',
      nombreEstablecimiento: '',
      establecimientos: [
        {
          idEmpresa: 0,
          ruc: '1310539752001',
          nombre: 'Matriz',
          direccion: 'Alborada',
          numAreas: 2,
          numPuestos: 2,
          numPersonas: 2,
          numNovedades: 2,
          numAccidentes: 2,
          numCapacitaciones: 2
        },
        {
          idEmpresa: 0,
          ruc: '0924970452001',
          nombre: 'pollitos hermanos 2',
          direccion: 'Urdesa',
          numAreas: 1,
          numPuestos: 2,
          numPersonas: 3,
          numNovedades: 0,
          numAccidentes: 2,
          numCapacitaciones: 2
        },
        {
          idEmpresa: 1,
          ruc: '1701300103001',
          nombre: 'Matriz',
          direccion: 'Alborada',
          numAreas: 1,
          numPuestos: 1,
          numPersonas: 3,
          numNovedades: 1,
          numAccidentes: 0,
          numCapacitaciones: 0
        }
      ]
    }
  },
  mounted () {
    this.cargarDatos()
  },
  methods: {
    cargarDatos () {
      console.log(this.$route.params.empresaId)
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
    visualizarAreas (ruc, nombre) {
      this.establecimientoId = ruc
      this.nombreEstablecimiento = nombre
      this.visibleAreas = true
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
