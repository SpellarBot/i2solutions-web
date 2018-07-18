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
              @click="eliminarPuesto(puestos)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
                    </div>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="dumb=true">#Personas: {{numPersonas}}</span>
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
export default{
  components: {DialogNovedadesFromAreas, DialogEquiposFromAreas, DialogRiesgosFromPuestos, DialogPuestosFromAreas, DialogCapacitacionesFromAreas, DialogEditarAreas},
  name: 'puestosPorArea',
  props: ['id', 'nombre', 'actividad', 'descripcion', 'numPuestos', 'numPersonas', 'numCapacitaciones', 'novedades', 'equipos', 'areaMetrosCuadrados', 'fotoUrl'],
  data () {
    return {
      dumb: false,
      visibleNovedades: false,
      visibleEquipos: false,
      visibleRiesgos: false,
      visiblePuestos: false,
      visibleCapacitaciones: false,
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
    }
  }
}
</script>
