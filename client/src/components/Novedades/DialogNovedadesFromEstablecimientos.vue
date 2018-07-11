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
            <h3>Novedades Sin Atender en  Establecimiento:</h3>
            <h2> {{nombreEstablecimiento}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="novedad in novedades"
                :key="novedad.id"
                xs4 lg4>
                <v-card style="padding:10px; margin:25px;" >
                  <div style="text-align:center"><b>Descripción</b></div>
                  <div>{{novedad.descripcion}}</div>
                  <div><b>prioridad: </b>{{novedad.prioridad}}</div>
                  <div><b>fecha: </b>{{novedad.fecha}}</div>
                  <div><b>Area: </b>{{novedad.area}}</div>
                  <div><b>Puesto: </b>{{novedad.puesto}}</div>
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
      nombreEstablecimiento: 'Matriz',
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
