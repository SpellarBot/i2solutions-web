<template>
  <main id="DialogEquiposFromAreas">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Equipos Por Area</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h1> Area: </h1>
            <h2> {{this.nombre}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="equipo in this.$store.getters.equipoAreas"
                :key="equipo.id"
                xs3 lg4>
                <v-card style="padding:5px; margin:25px;" >
                  <div><h3><b>Equipo: </b>{{equipo.nombre}}</h3></div>
                  <v-card-media
                    :src=equipo.fotoUrl
                    height="200px"
                    width="120px"
                    contain
                  >
                  </v-card-media>
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
                  <h3><b>Cantidad: </b>{{equipo.cantidad}}</h3>
                  <h3><b>Puesto: </b>{{equipo.puestosNombre}}</h3>
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
  name: 'DialogEquiposFromAreas',
  props: ['visible', 'nombre', 'areaId'],
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
    }
  },
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      this.verEquiposFromAreas()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verEquiposFromAreas () {
      let areasId = this.areaId
      this.$store.dispatch('getEquiposFromAreas', areasId)
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
