<template>
  <main id="DialogAreas">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{nombreEstablecimiento}}</v-toolbar-title>
      </v-toolbar>
      <br>
      <div v-for="area in $store.getters.areas" :key="area.id">
        <h3>{{area.nombre}}</h3>
        <puestosPorArea
          :idArea="area.idArea"
          >
        </puestosPorArea>
        <hr><br>
      </div>
    </v-card>
    </v-dialog>
  </main>
</template>
<script>
import puestosPorArea from './puestosPorArea'
export default {
  components: { puestosPorArea },
  name: 'DialogAreas',
  props: ['visible', 'EstablecimientoId', 'nombreEstablecimiento'],
  mounted () {
  },
  data () {
    return {
      areas: [
        {
          idArea: '0',
          nombre: 'Área Administrativa',
          actividad: 'Administración de personal',
          metrosCuadrados: 5.0,
          EstablecimientoId: '0',
          fotoUrl: '',
          numPuestos: 2,
          numPersonas: 5,
          numNovedades: 1,
          numAccidentes: 0,
          numCapacitaciones: 0
        },
        {
          idArea: '1',
          nombre: 'Área Recursos humanos',
          actividad: 'Contratación del personal',
          metrosCuadrados: 4.5,
          EstablecimientoId: '0',
          fotoUrl: '',
          numPuestos: 1,
          numPersonas: 2,
          numNovedades: 0,
          numAccidentes: 0,
          numCapacitaciones: 0
        },
        {
          idArea: '3',
          nombre: 'Área Contabilidad',
          actividad: 'Contabilizar ingresos y egresos',
          metrosCuadrados: 2.3,
          EstablecimientoId: '1',
          fotoUrl: '',
          numPuestos: 0,
          numPersonas: 0,
          numNovedades: 0,
          numAccidentes: 0,
          numCapacitaciones: 0
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
