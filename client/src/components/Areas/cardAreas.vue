<template>
  <main id="puestosPorArea">
            <v-card
              raised
              height="100%"
              >
                <v-card-title primary-title>
                  <v-flex xs12>
                    <h3 class="headline text-md-center">{{nombre}}</h3>
                  </v-flex>
                </v-card-title>
                <v-card-text>
                  <div>
                    <span><b>Actividad:</b> {{actividad}}</span><br>
                    <b>Descripción:</b> {{descripcion}} <br>
                    <b>Metros Cuadrados:</b> {{areaMetrosCuadrados}} <br>
                    <v-btn
                    :class="'editarArea' + id"
                    fab
                    dark
                    small
                    color="blue"
                    @click="visualizarEditar()"
                    v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
                    >
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn
                      fab
                      dark
                      small
                      color="red"
                      :class="'eliminarArea' + id"
                      @click="eliminarArea()"
                      v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </div>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarPersonas(nombre)">#Personas: {{numPersonas}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarPuestosFromAreas(nombre)">#Puestos: {{numPuestos}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span
                          :class="'capacitacionesArea' + id"
                          class="link" v-on:click="visualizarCapacitaciones(nombre)">#Capacitaciones: {{numCapacitaciones}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <div v-if="novedades>0">
                          <span class="link" v-on:click="visualizarNovedadesFromAreas">#Novedades: {{novedades}}</span>
                        </div>
                        <div v-if="novedades===0">
                          <span>#Novedades: {{novedades}}</span>
                        </div>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarEquipos">#Equipos: {{equipos}}</span>
                        </v-flex>
                      </v-layout>
                      <a v-on:click="verQR(id)">Ver código</a>
                    </v-container>
                </v-card-text>
            </v-card>
    <!--Para Eliminar Puestos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogAreas" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar esta Area?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogAreas = false">No</v-btn>
            <v-btn v-if="novedades>0" :class="'eliminarAreas' + this.areaId" color="blue darken-1" flat @click.native = "dialogNovedad = true">Sí</v-btn>
            <v-btn v-if="novedades===0" :class="'eliminarAreas' + this.areaId" color="blue darken-1" flat @click.native = "borrarArea()">Sí</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="dialogNovedad" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">¡Atención!</v-card-title>
          <v-card-text>Su área tiene {{novedades}} novedad(es) sin atender, si borra el área también se <b>perderá</b> esta información.
          ¿Está seguro que quiere eliminar el área?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogAreas = false; dialogNovedad = false">No</v-btn>
            <v-btn :class="'eliminarAreas' + this.areaId" color="blue darken-1" flat @click.native = "borrarArea()">Sí</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-dialog v-model="showQr" width="500px" @keydown.esc="close()" persistent >
      <v-card>
        <div ref="qr"></div>
        <v-card-actions>
          <v-btn @click.native="close()">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>

    <footer>
      <div ref="areas">
      </div>
      <v-btn
        fab
        @click.native="agregarArea=true"
        class = "bottom-right-corner"
        >
        <v-icon>add</v-icon>
      </v-btn>
    <agregarAreaDialog
      :visible="agregarArea"
      :establecimientoId="establecimientoId"
      @close="agregarArea=false"
    >
    </agregarAreaDialog>
    <DialogNovedadesFromAreas
      :areaId="areaId"
      :nombre="nombre"
      :visible ="visibleNovedades"
      :nombreEstablecimiento="estNombre"
      @close ="visibleNovedades=false">
    </DialogNovedadesFromAreas>
    <DialogEquiposFromAreas
      :areaId="areaId"
      :nombre="nombre"
      :visible ="visibleEquipos"
      :nombreEstablecimiento="estNombre"
      @close ="visibleEquipos=false">
    </DialogEquiposFromAreas>
    <DialogRiesgosFromPuestos
      :visible ="visibleRiesgos"
      @close ="visibleRiesgos=false">
    </DialogRiesgosFromPuestos>
    <DialogPuestosFromAreas
      :visible="visiblePuestos"
      :areaId="areaId"
      :areaNombre="areaNombre"
      :nombreEstablecimiento="estNombre"
      @close="visiblePuestos=false">
  </DialogPuestosFromAreas>
  <DialogEditarAreas
    :visible="visibleEdicion"
    :areaId="areaId"
    :areaNombre="areaNombre"
    :areaActividad="areaActividad"
    :areaDescripcion="areaDescripcion"
    :areaMetrosCuadrados="metrosCuadrados"
    :areaFotoUrl="areaFotoUrl"
    @close="visibleEdicion=false">
</DialogEditarAreas>
<DialogCapacitacionesFromAreas
  :visible="visibleCapacitaciones"
  :areaId="areaId"
  :areaNombre="areaNombre"
  :nombreEstablecimiento="estNombre"
  @close="visibleCapacitaciones=false">
</DialogCapacitacionesFromAreas>
<DialogPersonasFromAreas
  :visible="visiblePersonas"
  :areaId="areaId"
  :areaNombre="areaNombre"
  :nombreEstablecimiento="estNombre" 
  @close="visiblePersonas=false">
</DialogPersonasFromAreas>
  </footer>

  </main>
</template>

<script>
import Vue from 'vue'
import DialogNovedadesFromAreas from '../Novedades/DialogNovedadesFromAreas'
import DialogEquiposFromAreas from '../Equipos/DialogEquiposFromAreas'
import DialogRiesgosFromPuestos from '../Riesgos/DialogRiesgosFromPuestos'
import DialogPuestosFromAreas from '../DialogPuestosFromAreas'
import DialogEditarAreas from '../Editar/DialogEditarAreas'
import DialogCapacitacionesFromAreas from '../DialogCapacitacionesFromAreas'
import DialogPersonasFromAreas from '../DialogPersonasFromAreas'
import agregarAreaDialog from '../Agregar/agregarAreaDialog'
import VueQr from 'vue-qr'

export default{
  components: {DialogNovedadesFromAreas, DialogEquiposFromAreas, DialogRiesgosFromPuestos, DialogPuestosFromAreas, DialogCapacitacionesFromAreas, DialogEditarAreas, DialogPersonasFromAreas, agregarAreaDialog, VueQr},
  name: 'puestosPorArea',
  props: ['id', 'nombre', 'actividad', 'descripcion', 'numPuestos', 'numPersonas', 'numCapacitaciones', 'novedades', 'equipos', 'areaMetrosCuadrados', 'fotoUrl', 'index', 'establecimientoId', 'estNombre'],
  data () {
    return {
      //Variables a manipular del componente
      dumb: false,
      visibleNovedades: false,
      visibleEquipos: false,
      visibleRiesgos: false,
      visiblePuestos: false,
      visibleCapacitaciones: false,
      agregarArea: false,
      eliminarDialogAreas: false,
      visiblePersonas: false,
      dialogNovedad: false,
      areaId: '',
      areaNombre: '',
      areaActividad: '',
      metrosCuadrados: '',
      areaFotoUrl: '',
      areaDescripcion: '',
      visibleEdicion: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      showQr: false,
      QrId: '',
      qrInstance: {}
    }
  },
  methods: {
    visualizarEditar () { //Permite cargar la información para editar el área
      this.areaId = this.id
      this.areaActividad = this.actividad
      this.areaDescripcion = this.descripcion
      this.areaFotoUrl = this.fotoUrl
      this.metrosCuadrados = this.areaMetrosCuadrados
      this.areaNombre = this.nombre
      this.visibleEdicion = true
    },
    visualizarNovedades () {
      this.visibleNovedades = true
    },
    visualizarEquipos () {
      this.areaId = this.id
      this.areaNombre = this.nombre
      this.verEquiposFromAreas()
    },
    verEquiposFromAreas () { //carga la cantidad de equipos que ay por área
      this.$store.dispatch('getEquiposFromAreas', this.areaId)
        .then((resp) => {
          this.visibleEquipos = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarRiesgos () {
      this.visibleRiesgos = true
    },
    visualizarNovedadesFromAreas () { //Carga el número de novedades que tiene el área
      this.areaId = this.id
      this.areaNombre = this.nombre
      this.visibleNovedades = true
    },
    visualizarPuestosFromAreas (areaNombre) { //Carga el número de puestos que tiene el área
      this.areaId = this.id
      this.areaNombre = areaNombre
      this.verPuestos(this.id)
      this.visiblePuestos = true
    },
    visualizarPersonas (areaNombre) { //Cara el número de personas que tiene le área
      this.areaId = this.id
      this.areaNombre = areaNombre
      this.verPersonas()
    },
    verPersonas () { //Carga las personas que se encuentran en el área
      this.$store.dispatch('getPersonasFromArea', this.areaId)
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
    visualizarCapacitaciones (areaNombre) {
      this.areaId = this.id
      this.areaNombre = areaNombre
      this.verCapacitaciones()
    },
    verCapacitaciones () { //Carga las capacitaciones que hay en esa área
      this.$store.dispatch('getCapacitacionesFromArea', this.areaId)
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
    verPuestos (areaId) { //Carga los puestos por área.
      this.$store.dispatch('getPuestosFromArea', areaId)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    eliminarArea () { //Elimina el área de la base de datos
      this.areaId = this.id
      console.log('areaId', this.areaId)
      this.eliminarDialogAreas = true
    },
    verQR (id) { //Carga un QR de acuerdo al id del área
      this.showQr = true
      this.QrId = id
      var qrClass = Vue.extend(VueQr)
      var qrInstance = new qrClass({
        propsData: {text: '' + this.QrId}
      })
      this.qrInstance = qrInstance
      qrInstance.$mount()
      this.$refs.qr.appendChild(qrInstance.$el)
      this.qrCode = id
    },
    close () {
      this.showQr = false
      var instance = this.qrInstance
      instance.$destroy()
      instance.$el.remove()
      instance = null
    },
    borrarArea () { //Elimina el área
      this.eliminarDialogAreas = false
      let areasId = Number(this.id)
      console.log('idArea', areasId)
      this.$store.dispatch('deleteArea', areasId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Area borrada con exito.'
          this.color = 'success'
          console.log('area: ', this.$store.getters.areas[this.index])
          this.quitarDeArray()
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    quitarDeArray () {
      let array = this.$store.getters.areas
      array.splice(this.index, 1)
    }
  }
}
</script>

<style>
.bottom-right-corner {
  position: absolute;
  right:    0;
  bottom:   0;
  margin-right: 3%;
  margin-bottom: 2%;
}
</style>
