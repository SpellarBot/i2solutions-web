<template>
  <main id="puestosPorArea">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md4 lg4 v-for="(puesto, index) in puestos"  :key="puesto.idPuesto" offset-md1>
          <div v-if="index%3 == 0 && index > 0"> <br><br> </div>
            <v-card
              v-if="puesto.idArea === idArea"
              raised
              height="100%"
              >
                <v-card-title primary-title>
                  <v-flex xs12>
                    <h3 class="headline">{{puesto.nombrePuesto}}</h3>
                  </v-flex>
                  <div>
                    <b>descripción:</b> {{puesto.descripcionPuesto}} <br>
                  </div>
                </v-card-title>
                <v-card-text>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="dumb=true">#Personas: {{puesto.numPersonas}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarNovedades">#Novedades: {{puesto.numNovedades}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="dumb=true">#Accidentes: {{puesto.numAccidentes}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarEquipos">#Equipos: {{puesto.numEquipos}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarRiesgos">#Pool de Riesgos: </span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
         </v-flex>
      </v-layout>
    </v-container>
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
  props: ['idArea'],
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
    }
  }
}
</script>
