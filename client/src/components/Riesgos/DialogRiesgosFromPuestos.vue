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
            <h2> {{this.puesto}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="riesgo in this.$store.getters.riesgoPuesto"
                :key="riesgo.id"
                xs3 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <div><b>Tipo De Riezgo: </b>{{riesgo.tipoRiesgo}}</div>
                  <div><b>Porcentaje de Riezgo: </b>{{riesgo.porcentajeRiesgo}} %</div>
                  <div><b>Valoración Literal: </b>{{riesgo.valoracionLiteral}}</div>
                  <div><b>Personas Expuestas: </b>{{riesgo.personasExpuestas}}</div>
                  <v-btn
                    fab
                    dark
                    small
                    color="blue"
                  >
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    dark
                    small
                    color="blue"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
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
  name: 'DialogRiesgosFromPuestos',
  props: ['visible', 'puestoId', 'puestoNombre'],
  /* mounted () {
  }, */
  data () {
    return {
      size: 'sm'
    }
  },
  watch: {
    show () {
      this.cargarData()
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
    puestosId: {
      get () {
        return this.puestoId
      }
    },
    puesto: {
      get () {
        return this.puestoNombre
      }
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    cargarData () {
      this.valid = null
      this.loading = true
      this.verRiesgosFromPuestos()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verRiesgosFromPuestos () {
      let puestosId = this.puestoId
      this.$store.dispatch('getRiesgosFromPuestos', puestosId)
        .then((resp) => {
          console.log('Done')
          console.log('Datos', this.$store.getters.riesgoPuesto)
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
.izq {
  text-align: left;
}
</style>
