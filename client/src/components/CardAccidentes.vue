<template>
  <main id="CardAccidentes">
        <div><b>Incendio en puesto de empaquetado de pollo. </b></div>
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
          <div class="small-width">Un fósforo se cayó encendido cerca del perímetro, lo que causó una llama feroz.</div>
          <div><b>Fecha:</b> 16/06/2018 </div>
          <div><b>Heridos:</b> 2 personas</div>
          <div><b>Fallecidos:</b> 0 personas</div>
          <div>No fue atendido en la empresa</div>
          <DialogEditarAccidentes
          :visible="visibleEdicion"
          @close="visibleEdicion=false"
          ></DialogEditarAccidentes>
  </main>
</template>
<script>
import DialogEditarAccidentes from './Editar/DialogEditarAccidentes'
export default {
  components: { DialogEditarAccidentes },
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
