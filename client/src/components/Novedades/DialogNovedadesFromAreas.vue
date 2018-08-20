<template>
  <main id="DialogNovedadesFromAreas">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{nombreEstablecimiento}} > {{nombre}} > Novedades Sin Atender</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h1>Novedades Sin Atender en  Area:</h1>
            <h2> {{nombre}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="novedad in this.$store.getters.novedadesAreas.novedadesNoAtendidas"
                :key="novedad.id"
                xs4 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <div style="text-align:center"><b>Descripción</b></div>
                  <div>{{novedad.descripcion}}</div>
                  <div><b>prioridad: </b>{{novedad.prioridad}}</div>
                  <div>
                  <v-tooltip bottom>
                    <span slot="activator"><b>fecha:</b>{{fecha(novedad.fecha)}}</span>
                    <span>{{cuanto(novedad.fecha)}}</span>
                  </v-tooltip>
                  </div>

                  <div><b>Puesto: </b>{{novedad.puestosNombre}}</div>
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
const moment = require('moment')
export default {
  name: 'DialogNovedadesFromAreas',
  props: ['visible', 'nombre', 'areaId', 'nombreEstablecimiento'],
  /* mounted () {
  }, */
  data () {
    return {
      mensajeSnackbar: '',
      color: '',
      snackbar: false
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
  watch: {
    show () {
      this.cargarData()
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    cuanto: function (date) {
      moment.lang('es')
      return moment(date, 'YYYYMMDD').fromNow()
    },
    cargarData () {
      this.valid = null
      this.loading = true
      this.verNovedadesAreas()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verNovedadesAreas () {
      console.log(this.areaId)
      let areasId = Number(this.areaId)
      console.log(areasId)
      this.$store.dispatch('getNovedadesFromAreas', areasId)
        .then((resp) => {
          console.log('Done')
          console.log('Datos', this.$store.getters.novedadesAreas.novedadesNoAtendidas)
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
