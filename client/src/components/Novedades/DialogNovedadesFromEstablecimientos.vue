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
            <h1><b>Establecimiento: </b>{{establecimientoNombre}}</h1>
          <v-container  fluid>
            <h2>Novedades Sin Atender</h2>
            <v-layout row wrap>
              <v-flex
                v-for="(novedad) in this.$store.getters.novedadesEstablecimientos.novedadesNoAtendidas"
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
export default {
  name: 'DialogNovedadesFromEstablecimiento',
  props: ['visible', 'establecimientoId', 'establecimientoNombre'],
  /* mounted () {
  }, */
  data () {
    return {
      // nombreEstablecimiento: 'Matriz',
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      novedades: [
        {
          'id': 1,
          'descripcion': 'Extintores en deshuso, algunos caducados y con falta de mantenimiento',
          'prioridad': 'Alta',
          'fecha': '17/09/2017',
          'area': 'Administrativa',
          'puesto': 'Empacadora de Pollos'
        },
        {
          'id': 2,
          'descripcion': 'Mal Olor en puestos específicos del area de trabajo, poca operabilidad',
          'prioridad': 'Media',
          'fecha': '17/09/2015',
          'area': 'Coorporativa',
          'puesto': 'Empacadora de Carnes'
        },
        {
          'id': 3,
          'descripcion': 'Piso Mojado debido a la reciente limpieza, ocaciona inconvenientes',
          'prioridad': 'Baja',
          'fecha': '17/09/1997',
          'area': 'Contabilidad',
          'puesto': 'Area de Presupuesto'
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
    }
  },
  watch: {
    show () {
      this.cargarData()
    }
  },
  methods: {
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
