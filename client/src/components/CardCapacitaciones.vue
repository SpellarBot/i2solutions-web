<template>
  <main id="CardCapacitaciones">
        <div><b>Capacitación en seguridad al empacar pollo. </b></div>
        <v-btn
              fab
              dark
              right
              small
              color="blue"
              absolute
              @click="visualizarEditar()"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              right
              small
              color="blue"
              absolute
              class="offseted"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          <div class="small-width">Capacitación realizada para poder empacar pollo de manera efectiva sin riesgo de muerte</div>
          <div><b>Fecha:</b> 15/06/2018 </div>
          <div><b>Capacitador:</b> Joel Rodríguez</div>
          <footer>
            <DialogEditarCapacitaciones
            :visible="visibleEdicion"
            @close="visibleEdicion=false"
            ></DialogEditarCapacitaciones>
          </footer>
  </main>
</template>
<script>
import DialogEditarCapacitaciones from './Editar/DialogEditarCapacitaciones'
export default {
  components: { DialogEditarCapacitaciones },
  data () {
    return {
      visibleEdicion: false
    }
  },
  methods: {
    visualizarEditar () {
      // luego aquí pondré los datos que debe recibir el dialog, por ahora no :v
      this.visibleEdicion = true
    }
  }
}
</script>
<style>
  </style>
