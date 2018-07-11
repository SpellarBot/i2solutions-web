<template>
  <main id="DialogEquiposFromPuestos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Equipos Por Puestos</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h3>Equipo en Puesto</h3>
            <h2> {{nombrePuesto}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="equipo in equipos"
                :key="equipo.id"
                xs3 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <v-card-media
                    :src=equipo.foto
                    height="150px"
                    style="padding:5px"
                  >
                  </v-card-media>
                  <div><b>Equipo: </b>{{equipo.equipo}}</div>
                  <div><b>Cantidad: </b>{{equipo.cantidad}}</div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </v-card>
    </v-dialog>
  </main>
</template>
<script>
export default {
  name: 'DialogNovedades',
  props: ['visible', 'EstablecimientoId'],
  mounted () {
  },
  data () {
    return {
      nombrePuesto: 'Puesto1',
      size: 'sm',
      equipos: [
        {
          'equipoId': 1,
          'equipo': 'Peladora',
          'cantidad': 20,
          'foto': 'http://lorempixel.com/500/500/food'
        },
        {
          'equipoId': 2,
          'equipo': 'Empacadora',
          'cantidad': 10,
          'foto': 'http://lorempixel.com/500/500/any'
        },
        {
          'equipoId': 3,
          'equipo': 'Peladora',
          'cantidad': 25,
          'foto': 'http://lorempixel.com/500/500/people'
        },
        {
          'equipoId': 4,
          'equipo': 'Camiones',
          'cantidad': 4,
          'foto': 'http://lorempixel.com/500/500/nature'
        },
        {
          'equipoId': 5,
          'equipo': 'Cortadora',
          'cantidad': 20,
          'foto': 'http://lorempixel.com/500/500/food'
        }
      ]
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },
    establecimientoId: {
      get () {
        return this.EstablecimientoId
      }
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
