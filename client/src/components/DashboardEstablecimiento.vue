<template>
  <main id="dashboardEstablecimiento">
    <app-navbar></app-navbar>
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
    ></v-progress-circular>
  </div>
    </template>
    <template class="error" v-if="error">
      {{ error }}
    </template>
    <template class="content" v-if="valid">
      <v-layout row wrap align-center justify-center>
        <v-flex xs6>
      <v-card class="ma-2">
        <v-card-media class="white--text"
              :src=this.$store.getters.empresaSelected.urlFoto
              height="240px"
              contain
              >
            </v-card-media>
    <h1>Empresa: "{{ this.$store.getters.empresaSelected.nombre }}"</h1>
    <p>Actividad Comercial: {{ this.$store.getters.empresaSelected.actividadComercial }}</p>
    <p>Razón Social: {{ this.$store.getters.empresaSelected.razonSocial }}</p>
    <v-btn
              dark
              fab
              color="blue"
              small
              @click="visualizarEdicion()"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              color="blue"
              small
              @click="eliminarEmpresa()"
            >
              <v-icon>delete</v-icon>
            </v-btn>
  </v-card>
</v-flex>
</v-layout>
    <br>
    <h3>Establecimientos</h3>
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
        v-for="(establecimiento, index) in this.$store.getters.establecimientos"
        :key="establecimiento.id">
          <v-card
          raised
          >
          <div v-if="index%3 == 0 && index > 0"> <br><br> </div>
            <v-card-title primary-title>
                <v-flex xs12>
                  <h3 class="headline mb-0">{{establecimiento.nombres}}</h3>
                </v-flex>
                <div>
                  <b>Dirección:</b> {{establecimiento.direccion}} <br>
                  <b>RUC:</b> {{establecimiento.ruc}}
                </div>
            </v-card-title>
            <v-btn
              dark
              fab
              color="blue"
              small
              @click="visualizarEdicionEstablecimiento(establecimiento)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              color="blue"
              small
              @click="eliminarEstablecimiento(establecimiento)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
            <v-card-text>
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex xs6 md6>
                      <span class="link"
                        v-on:click="visualizarAreas(establecimiento.id, establecimiento.nombre)"
                        > #Areas: {{establecimiento.cantidadAreas}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarPuestos(establecimiento.id, establecimiento.nombres)">#Puestos: {{establecimiento.cantidadPuestos}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarPersonas">#Personas: {{establecimiento.cantidadPersonas}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarAccidentes">#Accidentes: {{establecimiento.cantidadAccidentes}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarCapacitaciones">#Capacitaciones: {{establecimiento.cantidadCapacitaciones}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarNovedadesFromEstablecimiento(establecimiento.id, establecimiento.nombres)">#Novedades sin atender: {{establecimiento.cantidadNovadadesSinAtender}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
    <!---->
    <v-layout row justify-center>
    <v-dialog v-model="eliminarDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Eliminar</v-card-title>
        <v-card-text>¿Está seguro que quiere eliminar este establecimiento?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="eliminarDialog = false">No</v-btn>
          <v-btn color="blue darken-1" flat @click = "borrarEstablecimiento()">Sí</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
  </v-container>
  </template>
    <footer>
    <DialogPuestosFromEstablecimientos
    :visible="visiblePuestos"
    :establecimientoId="establecimientoId"
    :establecimientoNombre="establecimientoNombres"
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
    <DialogNovedadesFromEstablecimientos
    :visible="visibleNovedades"
    :establecimientoId="establecimientoId"
    :establecimientoNombre="establecimientoNombres"
    @close="visibleNovedades=false"
    ></DialogNovedadesFromEstablecimientos>
    <DialogAreas
    :visible="visibleAreas"
    :EstablecimientoId="establecimientoId"
    :establecimientoNombres="establecimientoNombres"
    @close="visibleAreas=false"
    ></DialogAreas>
    <DialogEditarEmpresas
    :visible="visibleEdicion"
    :empresaId="id"
    :empresaNombre="empresaNombre"
    :empresaActividadComercial="empresaActividadComercial"
    :empresaRazonSocial="empresaRazonSocial"
    :empresaUrlFoto="empresaUrlFoto"
    @close="visibleEdicion=false"
    ></DialogEditarEmpresas>
    <DialogEditarEstablecimientos
    :visible="visibleEdicionEstablecimiento"
    :empresaId="empresaId"
    :establecimientoId="establecimientoId"
    :establecimientoNombres="establecimientoNombres"
    :establecimientoDireccion="establecimientoDireccion"
    :establecimientoRUC="establecimientoRUC"
    @close="visibleEdicionEstablecimiento=false"
    ></DialogEditarEstablecimientos>
  </footer>
  </main>

</template>

<script>
import router from '../router'
import DialogPuestosFromEstablecimientos from './DialogPuestosFromEstablecimientos'
import DialogPersonasFromEstablecimientos from './DialogPersonasFromEstablecimientos'
import DialogAccidentesFromEstablecimientos from './DialogAccidentesFromEstablecimientos'
import DialogCapacitacionesFromEstablecimientos from './DialogCapacitacionesFromEstablecimientos'
import DialogNovedadesFromEstablecimientos from './Novedades/DialogNovedadesFromEstablecimientos'
import DialogAreas from './Areas/verAreasDialog'
import DialogEditarEmpresas from './Editar/DialogEditarEmpresas'
import DialogEditarEstablecimientos from './Editar/DialogEditarEstablecimientos'
export default {
  components: {
    DialogPuestosFromEstablecimientos,
    DialogPersonasFromEstablecimientos,
    DialogAccidentesFromEstablecimientos,
    DialogCapacitacionesFromEstablecimientos,
    DialogNovedadesFromEstablecimientos,
    DialogAreas,
    DialogEditarEmpresas,
    DialogEditarEstablecimientos
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
      visibleEdicion: false,
      visibleEdicionEstablecimiento: false,
      visibleNovedades: false,
      eliminarDialog: false,

      empresaNombre: '',
      empresaActividadComercial: '',
      empresaRazonSocial: '',
      empresaUrlFoto: '',
      // para edicion establecimiento
      empresaId: '',
      establecimientoId: '',
      establecimientoNombres: '',
      establecimientoDireccion: '',
      establecimientoRUC: '',
      establecimientoSelectedId: 0
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
      this.verEmpresaSelected()
      this.verEstablecimientos()
      this.loading = false
      this.valid = true
    },
    verEmpresaSelected () {
      this.$store.dispatch('getEmpresaSola', this.id)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verEstablecimientos () {
      this.$store.dispatch('getEstablecimientosFront', this.id)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarPuestos (establecimientoId, establecimientoNombre) {
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
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
    visualizarNovedadesFromEstablecimiento (establecimientoId, establecimientoNombre) {
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
      this.visibleNovedades = true
    },
    visualizarEdicion () {
      let empresa = this.$store.getters.empresaSelected
      this.empresaId = this.id
      this.empresaNombre = empresa.nombre
      this.empresaActividadComercial = empresa.actividadComercial
      this.empresaRazonSocial = empresa.razonSocial
      this.empresaUrlFoto = empresa.urlFoto
      this.visibleEdicion = true
    },
    visualizarEdicionEstablecimiento (establecimiento) {
      this.empresaId = this.id
      this.establecimientoId = establecimiento.id
      this.establecimientoNombres = establecimiento.nombres
      this.establecimientoDireccion = establecimiento.direccion
      this.establecimientoRUC = establecimiento.ruc
      this.visibleEdicionEstablecimiento = true
    },
    visualizarAreas (id, nombre) {
      this.establecimientoId = id
      this.$store.dispatch('getAreas', this.establecimientoId)
      this.nombreEstablecimiento = nombre
      this.visibleAreas = true
    },
    eliminarEstablecimiento (establecimiento) {
      this.establecimientoSelectedId = establecimiento.id
      this.$data.eliminarDialog = true
    },
    borrarEstablecimiento () {
      this.eliminarDialog = false
      let establecimientoId = this.establecimientoSelectedId
      let datos = { establecimientoId }
      this.$store.dispatch('deleteEstablecimiento', { datos })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'establecimiento borrado con exito.'
          this.color = 'success'
          this.reloadEstablecimiento()
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    reloadEstablecimiento () {
    //   let empresaId = this.empresaId
      this.$store.dispatch('getEstablecimientosFront', this.id)
      this.$store.dispatch('getEmpresaSola', this.id)
        .then((resp) => {
          router.push('DashboardEstablecimiento')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
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
.offseted {
  top: 7em;
}
</style>
