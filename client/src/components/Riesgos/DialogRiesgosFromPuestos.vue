<template>
  <main id="DialogRiesgosFromPuestos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Riesgos Por Puestos</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h3>Riesgos en Puesto</h3>
            <h2> {{nombrePuesto}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="riesgo in riesgos"
                :key="riesgo.id"
                xs3 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <div><b>Tipo De Riezgo: </b>{{riesgo.tipoRiesgo}}</div>
                  <div><b>Porcentaje de Riezgo: </b>{{riesgo.porcentajeRiesgo}} %</div>
                  <div><b>Valoración Literal: </b>{{riesgo.valoracionLiteral}}</div>
                  <div><b>Personas Expuestas: </b>{{riesgo.personasExpuestas}}</div>
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
      riesgos: [
        {
          'id': 1,
          'personasExpuestas': 15,
          'tipoRiesgo': 'Inflamable',
          'valoracionLiteral': 'AA',
          'porcentajeRiesgo': '2'
        },
        {
          'id': 2,
          'personasExpuestas': 20,
          'tipoRiesgo': 'Quimico',
          'valoracionLiteral': 'AA+',
          'porcentajeRiesgo': '25'
        },
        {
          'id': 3,
          'personasExpuestas': 35,
          'tipoRiesgo': 'Industrial',
          'valoracionLiteral': 'BB',
          'porcentajeRiesgo': '14'
        },
        {
          'id': 4,
          'personasExpuestas': 2,
          'tipoRiesgo': 'Inflamable',
          'valoracionLiteral': 'A',
          'porcentajeRiesgo': '1'
        },
        {
          'id': 5,
          'personasExpuestas': 17,
          'tipoRiesgo': 'Inflamable',
          'valoracionLiteral': 'CC',
          'porcentajeRiesgo': '1'
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
