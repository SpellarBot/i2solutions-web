<template>
  <main id="CardPuestos">
    <v-card>
      <h2>{{ puestos.nombre }}</h2>
      <v-card-media
                    :src= puestos.fotoUrl
                    height="200px"
                    width="120px"
                    contain
                  >
      </v-card-media>
      <div class="small-width"><p>{{ puestos.descripcion }}</p></div>
      <v-btn
      :class="'editarPuesto' + puestos.id"
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar(puestos, areasId)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <!--Eliminar Puesto-->
            <v-btn
              fab
              dark
              small
              color="red"
              :class="'eliminarPuesto' + puestos.id"
              @click="eliminarPuesto(puestos)"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            >
              <v-icon>delete</v-icon>
            </v-btn>
            <div v-if="puestos.cantidadPersonas>0">
      <span class="link" v-on:click="visualizarPersonas(puestos)"> Número Personas: {{ puestos.cantidadPersonas }}</span>
    </div>
    <div v-if="puestos.cantidadPersonas===0">
      <span> Número Personas: {{ puestos.cantidadPersonas }}</span>
    </div>
    <div v-if="puestos.cantidadAccidentes>0">
      <span :class="'accidentesPuesto' + puestos.id" class="link" v-on:click="visualizarAccidentes(puestos)"> Número Accidentes: {{ puestos.cantidadAccidentes }}</span>
    </div>
    <div v-if="puestos.cantidadAccidentes===0">
      <span :class="'accidentesPuesto' + puestos.id"> Número Accidentes: {{ puestos.cantidadAccidentes }}</span>
    </div>
    <div v-if="puestos.cantidadNovedadesSinAtender>0">
      <span class="link" v-on:click="visualizarNovedadesFromPuestos(puestos.id,puestos.nombre)"> Novedades sin arender: {{ puestos.cantidadNovedadesSinAtender }}</span>
    </div>
    <div v-if="puestos.cantidadNovedadesSinAtender===0">
      <span> Novedades sin arender: {{ puestos.cantidadNovedadesSinAtender }}</span>
    </div>
    <div v-if="puestos.cantidadEquipos>0">
      <span  :class="'equiposPuesto' + puestos.id" class="link" v-on:click="visualizarEquipos(puestos.id,puestos.nombre)"> Equipos: {{ puestos.cantidadEquipos }}</span>
    </div>
    <div v-if="puestos.cantidadEquipos===0">
      <span  :class="'equiposPuesto' + puestos.id"> Equipos: {{ puestos.cantidadEquipos }}</span>
    </div>
    <div>
      <span class="link" v-on:click="visualizarControles(puestos.id,puestos.nombre)">Ver Controles</span>
    </div>
    </v-card>
    <footer>
    <DialogPersonasFromPuestos
    :visible="visiblePersonas"
    :puestoId="puestoId"
    :puestoNombre="puestoNombre"
    :nombreEstablecimiento = "establecimientoName"
    @close="visiblePersonas=false"
    ></DialogPersonasFromPuestos>
    <DialogAccidentesFromPuestos
    :visible="visibleAccidentes"
    :puestoId="puestoId"
    :puestoNombre="puestoNombre"
    :nombreEstablecimiento = "establecimientoName"
    @close="visibleAccidentes=false"
    ></DialogAccidentesFromPuestos>
    <DialogEditarPuestos
    :visible="visibleEdicion"
    :puestoNombre="puestoNombre"
    :puestoDescripcion="puestoDescripcion"
    :puestoId="puestoId"
    :areaId="areaIdEdit"
    :editMode="editModes"
    :puestoUrlFoto="puestoUrlFoto"    
    @close="visibleEdicion=false"
    ></DialogEditarPuestos>
    <DialogNovedadesFromPuestos
    :visible="visibleNovedades"
    :puestoNombre ="puestoNombre"
    :nombreEstablecimiento = "establecimientoName"
    :puestoId="puestoId"
    @close="visibleNovedades=false">
    </DialogNovedadesFromPuestos>
    <DialogRiesgosFromPuestos
    :visible="visibleRiesgos"
    :puestoNombre ="puestoNombre"
    :puestoId="puestoId"
    :nombreEstablecimiento = "establecimientoName"
    @close="visibleRiesgos=false">
    </DialogRiesgosFromPuestos>
    <DialogEquiposFromPuestos
    :visible="visibleEquipos"
    :puestoNombre ="puestoNombre"
    :puestoId="puestoId"
    :nombreEstablecimiento = "establecimientoName"
    @close="visibleEquipos=false">
    </DialogEquiposFromPuestos>
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
      <v-dialog fullscreen v-model="visibleControles" @keydown.esc="salirControl" hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="salirControl">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Controles en {{ puestoNombreSelected }}</v-toolbar-title>
          </v-toolbar>
          <br>
          <h1>Controles: </h1>
          <v-layout align-center justify-center row>
          <v-data-table
      :headers="headers"
      :items="controles"
      rows-per-page-text="Filas por página"
      class="elevation-1"
      :rows-per-page-items="[10,20,30,60]"
      >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.riesgo.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.tipo }}</td>
        <td v-if="props.item.estaImplementado==='0' || props.item.estaImplementado===false" class="text-xs-left">No implementado</td>
        <td v-if="props.item.estaImplementado==='1' || props.item.estaImplementado===true" class="text-xs-left">Implementado</td>
        <td class="justify-center layout px-0">
          <v-btn
          :disabled="!(props.item.estaImplementado==='0' || props.item.estaImplementado===false)"
          color="primary" dark
            small
            @click="implementar(props.item)"
          >Implementar
          </v-btn>
          </td>
        </template>
        <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        No hay controles ingresados en el sistema para consultar
      </v-alert>
    </template>
      </v-data-table>
    </v-layout>
    </v-card>
  </v-dialog>
    </v-layout>
    <!--Para Eliminar Puestos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogPuestos" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este Puesto?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :class="'borrarPuesto' + this.puestoSelected" color="blue darken-1" flat @click = "borrarPuesto()">Sí</v-btn>
            <v-btn color="blue" flat @click.native="eliminarDialogPuestos = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="confirmarImplementar" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Implementar</v-card-title>
          <v-card-text>¿Está seguro que quiere implementar este Control?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :class="'borrarPuesto' + this.puestoSelected" color="blue darken-1" flat @click = "implementarControl()">Sí</v-btn>
            <v-btn color="blue" flat @click.native="confirmarImplementar = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    </footer>
  </main>
</template>
<script>
import DialogPersonasFromPuestos from './DialogPersonasFromPuestos'
import DialogAccidentesFromPuestos from './DialogAccidentesFromPuestos'
import DialogEditarPuestos from './Editar/DialogEditarPuestos'
import DialogNovedadesFromPuestos from './Novedades/DialogNovedadesFromPuestos'
import DialogRiesgosFromPuestos from './Riesgos/DialogRiesgosFromPuestos'
import DialogEquiposFromPuestos from './Equipos/DialogEquiposFromPuestos'
// import index from '../router'
export default {
  props: [ 'puesto', 'areaId', 'editMode', 'deleteMode', 'index1', 'index2', 'establecimientoName' ],
  components: { DialogPersonasFromPuestos, DialogAccidentesFromPuestos, DialogEditarPuestos, DialogNovedadesFromPuestos, DialogRiesgosFromPuestos, DialogEquiposFromPuestos },
  data () {
    return {
      visiblePersonas: false,
      visibleControles: false,
      visibleAccidentes: false,
      visibleEdicion: false,
      visibleNovedades: false,
      visibleRiesgos: false,
      visibleEquipos: false,
      eliminarDialogPuestos: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      puestoNombre: '',
      puestoDescripcion: '',
      puestoId: '',
      puestoUrlFoto: '',
      puestoSelected: 0,
      areaIdEdit: '',
      puestoNombreSelected: '',
      controles: [],
      controlAImplementar: null,
      confirmarImplementar: false,
      headers: [
        { text: 'Descripción', value: 'descripcion', sortable: false },
        {
          text: 'Riesgo',
          align: 'left',
          sortable: false,
          value: 'riesgo'
        },
        { text: 'Tipo', value: 'tipo', sortable: false },
        { text: 'Está implementado', value: 'estaImplementado', sortable: true },
        { text: 'Acciones', value: 'name', sortable: false }
      ]
    }
  },
  computed: {
    puestos: {
      get () {
        console.log('puestos: ', this.puesto)
        return this.puesto
      }
    },
    areasId: {
      get () {
        return this.areaId
      }
    },
    editModes: {
      get () {
        return this.editMode
      }
    }
  },
  methods: {
    visualizarPersonas (puesto) {
      this.puestoId = puesto.id
      this.puestoNombre = puesto.nombre
      this.verPersonas()
    },
    verPersonas () {
      this.$store.dispatch('getPersonasFromPuesto', this.puestoId)
        .then((resp) => {
          console.log('Hecho')
          this.visiblePersonas = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarAccidentes (puesto) {
      this.puestoNombre = puesto.nombre
      this.puestoId = puesto.id
      this.verAccidentes()
    },
    verAccidentes () {
      console.log(this.puestoId)
      this.$store.dispatch('getAccidentesFromPuesto', this.puestoId)
        .then((resp) => {
          console.log('Hecho')
          this.visibleAccidentes = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarNovedadesFromPuestos (puestoId, puestoNombre) {
      if (this.puestos.cantidadNovedadesSinAtender > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.visibleNovedades = true
      }
    },
    visualizarRiesgos (puestoId, puestoNombre) {
      // if (this.puestos.cantidadEquipos > 0) {
      this.puestoId = puestoId
      this.puestoNombre = puestoNombre
      this.visibleRiesgos = true
      // }
    },
    visualizarEquipos (puestoId, puestoNombre) {
      if (this.puestos.cantidadEquipos > 0) {
        this.puestoId = puestoId
        this.puestoNombre = puestoNombre
        this.verEquiposFromPuestos()
      }
    },
    verEquiposFromPuestos () {
      this.$store.dispatch('getEquiposFromPuestos', this.puestoId)
        .then((resp) => {
          this.visibleEquipos = true
          console.log('Hecho')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarControles (puestosId, puestosNombre) {
      this.puestoNombreSelected = puestosNombre
      this.$store.dispatch('getControlesPuesto', puestosId)
        .then((resp) => {
          this.controles = this.$store.getters.controles
          console.log(this.controles)
          this.visibleControles = true
          console.log('Hecho')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    visualizarEditar (puesto, areaId) {
      console.log(this.editModes)
      this.puestoNombre = puesto.nombre
      this.puestoDescripcion = puesto.descripcion
      this.puestoId = puesto.id
      this.areaIdEdit = areaId
      this.puestoUrlFoto = puesto.fotoUrl
      this.visibleEdicion = true
    },
    eliminarPuesto (puesto) {
      this.$data.puestoSelected = puesto.id
      console.log(this.$data.puestoSelected)
      this.eliminarDialogPuestos = true
    },
    borrarPuesto () {
      this.eliminarDialogPuestos = false
      let puestosId = Number(this.puestoSelected)
      console.log('idPuesto', puestosId)
      this.$store.dispatch('deletePuesto', puestosId)
        .then((resp) => {
          console.log('entre')
          this.snackbar = true

          if (this.deleteMode === 1) {
            this.$store.getters.puestos.splice(this.index, 1)
          } else {
            this.$store.getters.areasPuestos[this.index1].puestos.splice(this.index2, 1)
          }
          this.mensajeSnackbar = 'Puesto borrado con exito.'
          this.color = 'success'
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    salirControl () {
      this.visibleControles = false
      this.controles.length = 0
      console.log('sali')
      this.controlAImplementar = null
    },
    implementar (control) {
      this.controlAImplementar = control
      console.log(this.controlAImplementar)
      this.confirmarImplementar = true
    },
    implementarControl () {
      this.$store.dispatch('implementarControl', this.controlAImplementar.id)
        .then((resp) => {
          this.color = 'success'
          this.controlAImplementar.estaImplementado = true
          this.snackbar = true
          this.mensajeSnackbar = 'Control implementado exitosamente'
          this.confirmarImplementar = false
          console.log('Hecho')
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
<style>
  .offseted {
  top: 6.5em;
}
.small-width {
  width: 70%;
  margin-left: 15%;
}
</style>
