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
              fab
              dark
              small
              color="blue"
              @click="visualizarEditar()"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="blue"
              @click="eliminarArea()"
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
                          <span class="link" v-on:click="visualizarCapacitaciones(nombre)">#Capacitaciones: {{numCapacitaciones}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarNovedadesFromAreas">#Novedades: {{novedades}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarEquipos">#Equipos: {{equipos}}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
      <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>

    <!--Para Eliminar Puestos-->

    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogAreas" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar esta Area?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogAreas = false">No</v-btn>
            <v-btn color="blue darken-1" flat @click = "borrarArea()">Sí</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <footer>
    <DialogNovedadesFromAreas
    :areaId="areaId"
    :nombre="nombre"
    :visible ="visibleNovedades"
    @close ="visibleNovedades=false">
    </DialogNovedadesFromAreas>
    <DialogEquiposFromAreas
    :areaId="areaId"
    :nombre="nombre"
    :visible ="visibleEquipos"
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
@close="visibleCapacitaciones=false">
</DialogCapacitacionesFromAreas>
<DialogPersonasFromAreas
:visible="visiblePersonas"
:areaId="areaId"
:areaNombre="areaNombre"
@close="visiblePersonas=false">
</DialogPersonasFromAreas>
  </footer>

  </main>
</template>

<script>
import DialogNovedadesFromAreas from '../Novedades/DialogNovedadesFromAreas'
import DialogEquiposFromAreas from '../Equipos/DialogEquiposFromAreas'
import DialogRiesgosFromPuestos from '../Riesgos/DialogRiesgosFromPuestos'
import DialogPuestosFromAreas from '../DialogPuestosFromAreas'
import DialogEditarAreas from '../Editar/DialogEditarAreas'
import DialogCapacitacionesFromAreas from '../DialogCapacitacionesFromAreas'
import DialogPersonasFromAreas from '../DialogPersonasFromAreas'
export default{
  components: {DialogNovedadesFromAreas, DialogEquiposFromAreas, DialogRiesgosFromPuestos, DialogPuestosFromAreas, DialogCapacitacionesFromAreas, DialogEditarAreas, DialogPersonasFromAreas},
  name: 'puestosPorArea',
  props: ['id', 'nombre', 'actividad', 'descripcion', 'numPuestos', 'numPersonas', 'numCapacitaciones', 'novedades', 'equipos', 'areaMetrosCuadrados', 'fotoUrl', 'index'],
  data () {
    return {
      dumb: false,
      visibleNovedades: false,
      visibleEquipos: false,
      visibleRiesgos: false,
      visiblePuestos: false,
      visibleCapacitaciones: false,
      eliminarDialogAreas: false,
      visiblePersonas: false,
      areaId: '',
      areaNombre: '',
      areaActividad: '',
      metrosCuadrados: '',
      areaFotoUrl: '',
      areaDescripcion: '',
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      visibleEdicion: false
    }
  },
  methods: {
    visualizarEditar () {
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
      this.visibleEquipos = true
    },
    visualizarRiesgos () {
      this.visibleRiesgos = true
    },
    visualizarNovedadesFromAreas () {
      this.areaId = this.id
      this.areaNombre = this.nombre
      this.visibleNovedades = true
    },
    visualizarPuestosFromAreas (areaNombre) {
      console.log(areaNombre)
      this.areaId = this.id
      this.areaNombre = areaNombre
      this.verPuestos(this.id)
      this.visiblePuestos = true
    },
    visualizarPersonas (areaNombre) {
      console.log(areaNombre)
      this.areaId = this.id
      this.areaNombre = areaNombre
      this.$store.dispatch('getPersonasFromArea', this.areaId)
      this.visiblePersonas = true
    },
    visualizarCapacitaciones (areaNombre) {
      this.areaId = this.id
      this.areaNombre = areaNombre
      this.visibleCapacitaciones = true
    },
    verPuestos (areaId) {
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

    eliminarArea () {
      this.eliminarDialogAreas = true
    },
    borrarArea () {
      this.eliminarDialogAreas = false
      let areasId = Number(this.id)
      console.log('idPuesto', areasId)
      this.$store.dispatch('deleteArea', areasId)
        .then((resp) => {
          console.log('entre')
          this.snackbar = true
          this.mensajeSnackbar = 'Area borrada con exito.'
          this.color = 'success'
          this.$store.getters.areas.splice(this.index,1)
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    }
  }
}
</script>
