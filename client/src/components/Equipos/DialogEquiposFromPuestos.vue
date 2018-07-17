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
            <h2> {{this.puesto}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="equipo in this.$store.getters.equipoPuesto"
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
  name: 'DialogEquiposFromPuestos',
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
      this.verEquiposFromPuestos()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verEquiposFromPuestos() {
      let puestosId = this.puestoId
      this.$store.dispatch('getEquiposFromPuestos', puestosId)
        .then((resp) => {
          console.log('Done')
          console.log('Datos', this.$store.getters.equipoPuesto)
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
