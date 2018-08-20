<template>
  <div>
    <main id="DialogAreas">
      <v-dialog fullscreen v-model="show" hide-overlay transition="dialog-bottom-transition">
        <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="show = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Establecimiento {{this.establecimientoNombres}}</v-toolbar-title>
        </v-toolbar>
        <br>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap align-center>
              <v-flex md4 v-for="(area,index) in $store.getters.areas" :key="area.id" class="text-xs-center">
                <cardAreas
                  :id = "area.id"
                  :nombre = "area.areaNombre"
                  :actividad = "area.areaActividad"
                  :descripcion = "area.areaDescripcionLugar"
                  :numPuestos = "area.cantidadPuestos"
                  :numPersonas = "area.cantidadPersonas"
                  :numCapacitaciones = "area.cantidadCapacitaciones"
                  :novedades = "area.cantidadNovedades"
                  :equipos = "area.cantidadEquipos"
                  :areaMetrosCuadrados = "area.areaMetrosCuadrados"
                  :fotoUrl = "area.areaFotoUrl"
                  :index = index
                  :establecimientoId = "establecimientoId"
                  :estNombre = "establecimientoNombres"
                  >
                </cardAreas>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      </v-dialog>
    </main>
  </div>
</template>
<script>
import cardAreas from './cardAreas'
export default {
  components: { cardAreas },
  name: 'DialogAreas',
  props: ['visible', 'establecimientoId', 'establecimientoNombres'],
  mounted () {
  },
  data () {
    return {
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
  }
}
</script>
<style>
.izq {
  text-align: left;
}
.bottom-right-corner {
  position: absolute;
  right:    0;
  bottom:   0;
  margin-right: 3%;
  margin-bottom: 2%;
}
</style>
