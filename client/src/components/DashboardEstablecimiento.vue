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
              class="editarEmpresa"
              @click="visualizarEdicion()"
              v-if="this.$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              color="red"
              small
              class="eliminarEmpresa"
              @click="eliminarEmpresa()"
              v-if="this.$store.getters.usuario.rol === 'admin-i2solutions'"
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
              :class="'editarEstablecimiento' + establecimiento.id"
              @click="visualizarEdicionEstablecimiento(establecimiento)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              color="red"
              small
              :class="'eliminarEstablecimiento' + establecimiento.id"
              @click="eliminarEstablecimiento(establecimiento)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>delete</v-icon>
            </v-btn>
            <v-card-text>
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex xs6 md6>
                      <span class="link"
                      :class="'verAreas' + establecimiento.id"
                        v-on:click="visualizarAreas(establecimiento.id, establecimiento.nombres)"
                        > #Areas: {{establecimiento.cantidadAreas}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span
                      :class="'verPuestos' + establecimiento.id"
                       class="link" v-on:click="visualizarPuestos(establecimiento.id, establecimiento.nombres)">#Puestos: {{establecimiento.cantidadPuestos}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span :class="'personasEstablecimiento' + establecimiento.id" class="link" v-on:click="visualizarPersonas(establecimiento.id, establecimiento.nombres)">#Personas: {{establecimiento.cantidadPersonas}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarAccidentes(establecimiento.id, establecimiento.nombres)">#Accidentes: {{establecimiento.cantidadAccidentes}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <span class="link" v-on:click="visualizarCapacitaciones(establecimiento.id, establecimiento.nombres)">#Capacitaciones: {{establecimiento.cantidadCapacitaciones}}</span>
                    </v-flex>
                    <v-flex xs6 md6>
                      <div v-if="establecimiento.cantidadNovedadesSinAtender>0">
                      <span class="link" v-on:click="visualizarNovedadesFromEstablecimiento(establecimiento.id, establecimiento.nombres)">#Novedades sin atender: {{establecimiento.cantidadNovadadesSinAtender}}</span>
                    </div>
                    <div v-if="establecimiento.cantidadNovedadesSinAtender===0">
                      <span>#Novedades sin atender: {{establecimiento.cantidadNovadadesSinAtender}}</span>
                    </div>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
    <!--Para Eliminar Establecimientos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este establecimiento?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="novedades>0"color="blue darken-1" flat @click="secondChance=true">Sí</v-btn>
            <v-btn v-if="novedades===0" class="eliminarEstablecimiento" color="blue darken-1" flat @click = "borrarEstablecimiento()">Sí</v-btn>
            <v-btn color="blue" flat @click.native="eliminarDialog = false; novedades=0">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!--Segunda oportunidad-->
    <v-layout row justify-center>
      <v-dialog v-model="secondChance" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>Su establecimiento tiene {{novedades}} novedad(es) sin atender, si borra el esteblecimiento también se <b>perderá</b> esta información.
          ¿Está seguro que quiere eliminar el establecimiento?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="eliminarEstablecimiento" color="blue darken-1" flat @click = "borrarEstablecimiento();secondChance=false">Sí</v-btn>
            <v-btn color="blue" flat @click.native="eliminarDialog = false;secondChance = false; novedades=0">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!--Para elimiar Empresa-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialog2" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar esta Empresa?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="eliminar" color="blue darken-1" flat @click = "borrarEmpresa()">Sí</v-btn>
            <v-btn color="blue" flat @click.native="eliminarDialog2 = false">No</v-btn>
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
    <v-btn
      fab
      @click.native="agregarDialog=true"
      class = "bottom-right-corner"
      >
      <v-icon>add</v-icon>
    </v-btn>
    <agregarEstablecimientoDialog
    :visible="agregarDialog"
    :idEmpresa="$route.params.empresaId"
    @close="agregarDialog=false; cargarDatos()"
    >
    </agregarEstablecimientoDialog>
    <DialogPuestosFromEstablecimientos
    :visible="visiblePuestos"
    :establecimientoId="establecimientoId"
    :establecimientoNombre="establecimientoNombres"
    @close="visiblePuestos=false"
    ></DialogPuestosFromEstablecimientos>
    <DialogPersonasFromEstablecimientos
    :visible="visiblePersonas"
    :establecimientoId="establecimientoId"
    :establecimientoNombre="establecimientoNombres"
    @close="visiblePersonas=false"
    ></DialogPersonasFromEstablecimientos>
    <DialogAccidentesFromEstablecimientos
    :visible="visibleAccidentes"
    :establecimientoId="establecimientoId"
    :establecimientoNombre="establecimientoNombres"
    @close="visibleAccidentes=false"
    ></DialogAccidentesFromEstablecimientos>
    <DialogCapacitacionesFromEstablecimientos
    :visible="visibleCapacitaciones"
    :establecimientoId="establecimientoId"
    :establecimientoNombre="establecimientoNombres"
    @close="visibleCapacitaciones=false"
    ></DialogCapacitacionesFromEstablecimientos>
    <DialogNovedadesFromEstablecimientos
    :visible="visibleNovedades"
    :establecimientoId="establecimientoId"
    :establecimientoNombres="establecimientoNombres"
    @close="visibleNovedades=false"
    ></DialogNovedadesFromEstablecimientos>
    <DialogAreas
    :visible="visibleAreas"
    :establecimientoId="establecimientoId"
    :indexE="index"
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
import agregarEstablecimientoDialog from './Agregar/agregarEstablecimientoDialog'
export default {
  components: {
    DialogPuestosFromEstablecimientos,
    DialogPersonasFromEstablecimientos,
    DialogAccidentesFromEstablecimientos,
    DialogCapacitacionesFromEstablecimientos,
    DialogNovedadesFromEstablecimientos,
    DialogAreas,
    DialogEditarEmpresas,
    DialogEditarEstablecimientos,
    agregarEstablecimientoDialog
  },
  data () {
    return {
      //variables a usar por el componente
      loading: false,
      error: null,
      valid: null,
      id: -1,
      secondChance: false,
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
      eliminarDialog2: false,
      agregarDialog: false,
      agregarArea: false,
      novedades: 0,
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
      establecimientoSelectedId: 0,
      rol: ''
    }
  },
  mounted () {
    this.cargarDatos()
  },
  methods: {
    cargarDatos () {
      //funcion para cargar los estableciminetos de la empresa. Recibe el id de la empresa y retorna la lista de establecimientos de la empresa
      console.log(this.$route.params.empresaId)
      this.error = this.valid = null
      this.loading = true
      this.rol = this.$store.getters.usuario.rol
      this.id = Number(this.$route.params.empresaId)
      // console.log(this.$store.getters.usuario.rol)
      this.verEmpresaSelected()
      this.verEstablecimientos()
      this.loading = false
      this.valid = true
    },
    verEmpresaSelected () {
      this.$store.dispatch('getEmpresaSola', Number(this.id))
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
      this.$store.dispatch('getEstablecimientosFront', Number(this.id))
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    obtenerAccidentes (establecimientosId) {
      //funcion para ver los accidentes. Recibe el id del establecimiento y retorna la lista de accidentes
      this.$store.dispatch('getAccidentesFromEstablecimiento', establecimientosId)
        .then((resp) => {
          console.log('Done')
          this.visibleAccidentes = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verAreasPuestos (establecimientosId) {
      //fucion para obtener areas y puestos. Recibe el id del establecimineto y retorna la lista de areas + puestos
      this.$store.dispatch('getPuestosFromEstablecimiento', establecimientosId)
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
      this.verAreasPuestos(establecimientoId)
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
      this.visiblePuestos = true
    },
    visualizarPersonas (establecimientoId, establecimientoNombre) {
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
      this.verPersonas(establecimientoId)
    },
    verPersonas (establecimientoId) {
      //funcion para obtener las personas de un establecimiento. Recibe el id del establecimiento y retorna la lista de personas de dicho establecimiento
      this.$store.dispatch('getPersonasFromEstablecimiento', establecimientoId)
        .then((resp) => {
          console.log('Done')
          this.visiblePersonas = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarAccidentes (establecimientoId, establecimientoNombre) {
      this.obtenerAccidentes(establecimientoId)
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
    },
    visualizarCapacitaciones (establecimientoId, establecimientoNombre) {
      this.verCapacitaciones(establecimientoId)
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
    },
    visualizarNovedadesFromEstablecimiento (establecimientoId, establecimientoNombre) {
      this.establecimientoId = establecimientoId
      this.establecimientoNombres = establecimientoNombre
      this.visibleNovedades = true
    },
    eliminarEmpresa () {
      this.eliminarDialog2 = true
    },
    borrarEmpresa () {
      this.eliminarDialog2 = false
      let empresaId = this.id
      this.$store.dispatch('deleteEmpresa', empresaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa eliminada con exito.'
          this.color = 'success'
          this.reloadEmpresas()
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
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
      this.establecimientoNombres = nombre
      console.log(this.establecimientoNombres)
      console.log('establicimientoid', this.establecimientoId)
      this.$store.dispatch('getAreas', this.establecimientoId)
      this.visibleAreas = true
    },
    eliminarEstablecimiento (establecimiento) {
      this.establecimientoSelectedId = establecimiento.id
      this.novedades = establecimiento.cantidadNovadadesSinAtender
      this.$data.eliminarDialog = true
    },
    borrarEstablecimiento () {
      this.novedades = 0
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
    reloadEmpresas () {
      this.$store.dispatch('getEmpresas')
        .then((resp) => {
          router.push('/dashboard')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verCapacitaciones (establecimientosId) {
      this.$store.dispatch('getCapacitacionesFromEstablecimiento', establecimientosId)
        .then((resp) => {
          console.log('Done')
          this.visibleCapacitaciones = true
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
    dashboard () {
      router.push('dashboard')
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
.bottom-right-corner {
  position: absolute;
  right:    0;
  bottom:   0;
  margin-right: 3%;
  margin-bottom: 2%;
}
</style>
