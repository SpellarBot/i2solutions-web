<template>
  <main id="DialogNovedadesFromEstablecimientos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Novedades Sin Atender</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h1><b>Establecimiento: </b>{{establecimientoNombres}}</h1>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(novedad) in this.$store.getters.novedadesEstablecimientos.novedadesNoAtendidas"
                :key="novedad.id"
                xs4 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <div style="text-align:center"><b>Descripción</b></div>
                  <div>{{novedad.descripcion}}</div>
                  <div><b>prioridad: </b>{{novedad.prioridad}}</div>
                  <div><b>fecha: </b>{{fecha(novedad.fecha)}}</div>
                  <div><b>Puesto: </b>{{novedad.puestosNombre}}</div>
                  <div><b>Areas: </b>{{novedad.areasNombre}}</div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <!--br>
          <hr>
          <h1>Novedades Atendidas</h1>
          <h2> {{establecimientoNombre}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(novedad) in this.$store.getters.novedadesEstablecimientos.novedadesAtendidas"
                :key="novedad.id"
                xs4 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <div style="text-align:center"><b>Descripción</b></div>
                  <div>{{novedad.descripcion}}</div>
                  <div><b>prioridad: </b>{{novedad.prioridad}}</div>
                  <div><b>fecha: </b>{{novedad.fecha}}</div>
                  <div><b>Puesto: </b>{{novedad.puestosId}}</div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container-->
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
  name: 'DialogNovedadesFromEstablecimiento',
  props: ['visible', 'establecimientoId', 'establecimientoNombres'],
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
    cargarData () {
      this.valid = null
      this.loading = true
      this.verNovedadesEstablecimiento()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verNovedadesEstablecimiento () {
      this.$store.dispatch('getNovedadesFromEstablecimiento', this.establecimientoId)
        .then((resp) => {
          console.log('Done')
          console.log('Datos', this.$store.getters.novedadesEstablecimientos)
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
