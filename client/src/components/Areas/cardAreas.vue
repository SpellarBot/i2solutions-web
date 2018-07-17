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
                      <span>{{actividad}}</span><br>
                      <b>descripción:</b> {{descripcion}} <br>
                    </div>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="dumb=true">#Personas: {{numPersonas}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarNovedades">#Puestos: {{numPuestos}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="dumb=true">#Capacitaciones: {{numCapacitaciones}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarEquipos">#Novedades: {{novedades}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarRiesgos">#Equipos: {{equipos}}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
    <footer>
    <DialogNovedadesFromPuestos
    :visible ="visibleNovedades"
    @close ="visibleNovedades=false">
    </DialogNovedadesFromPuestos>
    <DialogEquiposFromPuestos
    :visible ="visibleEquipos"
    @close ="visibleEquipos=false">
    </DialogEquiposFromPuestos>
    <DialogRiesgosFromPuestos
    :visible ="visibleRiesgos"
    @close ="visibleRiesgos=false">
    </DialogRiesgosFromPuestos>
  </footer>
  </main>
</template>

<script>
import DialogNovedadesFromPuestos from '../Novedades/DialogNovedadesFromPuestos'
import DialogEquiposFromPuestos from '../Equipos/DialogEquiposFromPuestos'
import DialogRiesgosFromPuestos from '../Riesgos/DialogRiesgosFromPuestos'
export default{
  components: {DialogNovedadesFromPuestos, DialogEquiposFromPuestos, DialogRiesgosFromPuestos},
  name: 'puestosPorArea',
  props: ['nombre', 'actividad', 'descripcion', 'numPuestos', 'numPersonas', 'numCapacitaciones', 'novedades', 'equipos'],
  data () {
    return {
      dumb: false,
      visibleNovedades: false,
      visibleEquipos: false,
      visibleRiesgos: false,
      puestos:
      [
        {
          idPuesto: '0',
          nombrePuesto: 'puesto 1',
          descripcionPuesto: 'Este es el puesto 1 que fue el primero creado',
          numPersonas: 3,
          numNovedades: 1,
          numAccidentes: 0,
          numEquipos: 5,
          idArea: '0'
        },
        {
          idPuesto: '1',
          nombrePuesto: 'puesto 2',
          descripcionPuesto: 'Este en cambio fue el segundo puesto',
          numPersonas: 2,
          numNovedades: 0,
          numAccidentes: 0,
          numEquipos: 4,
          idArea: '0'
        },
        {
          idPuesto: '2',
          nombrePuesto: 'A puesto',
          descripcionPuesto: '',
          numPersonas: 2,
          numNovedades: 0,
          numAccidentes: 0,
          numEquipos: 10,
          idArea: '1'
        }
      ]
    }
  },
  methods: {
    visualizarNovedades () {
      this.visibleNovedades = true
    },
    visualizarEquipos () {
      this.visibleEquipos = true
    },
    visualizarRiesgos () {
      this.visibleRiesgos = true
    },
    visualizarNovedadesFromAreas (areaId, areaNombre) {
      this.areaId = areaId
      this.areaNombre = areaNombre
      this.visibleNovedades = true
    },
  }
}
</script>
