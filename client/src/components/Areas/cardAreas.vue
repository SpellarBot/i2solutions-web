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
                          <span class="link" >#Puestos: {{numPuestos}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="dumb=true">#Capacitaciones: {{numCapacitaciones}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarNovedades">#Novedades: {{novedades}}</span>
                        </v-flex>
                        <v-flex xs6 md6>
                          <span class="link" v-on:click="visualizarEquipos">#Equipos: {{equipos}}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
    <footer>
    <DialogNovedadesFromAreas
    :idArea="idArea"
    :nombre="nombre"
    :visible ="visibleNovedades"
    @close ="visibleNovedades=false">
    </DialogNovedadesFromAreas>
    <DialogEquiposFromAreas
    :idArea="idArea"
    :nombre="nombre"
    :visible ="visibleEquipos"
    @close ="visibleEquipos=false">
    </DialogEquiposFromAreas>
  </footer>
  </main>
</template>

<script>
import DialogNovedadesFromAreas from '../Novedades/DialogNovedadesFromAreas'
import DialogEquiposFromAreas from '../Equipos/DialogEquiposFromAreas'
export default{
  components: {DialogNovedadesFromAreas, DialogEquiposFromAreas},
  name: 'puestosPorArea',
  props: ['nombre', 'actividad', 'descripcion', 'numPuestos', 'numPersonas', 'numCapacitaciones', 'novedades', 'equipos', 'idArea'],
  data () {
    return {
      dumb: false,
      visibleNovedades: false,
      visibleEquipos: false,
    }
  },
  methods: {
    visualizarNovedades () {
      this.visibleNovedades = true
    },
    visualizarEquipos () {
      this.visibleEquipos = true
    }
  }
}
</script>
