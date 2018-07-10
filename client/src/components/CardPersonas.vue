<template>
  <main id="CardPersonas">
        <div><b>Nombres y Apellido: </b> Mario Gutierrez </div>
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
          <div><b>Rol: </b> Inspector de Seguridad</div>
          <div><b>Correo:</b> magutie@gmail.com </div>
          <div><b>Cédula:</b> 1310539752</div>
          <div><b>Telefono:</b> 0969004491</div>
          <div><b>Fecha de Nacimiento: </b> 14/02/1973</div>
          <div><b>Perfil Profesional: </b> Magister en Empaques</div>
          <div><b>usuario:</b> magutie</div>
          <footer>
            <DialogEditarPersonas
            :visible="visibleEdicion"
            @close="visibleEdicion=false"
            ></DialogEditarPersonas>
          </footer>
  </main>
</template>
<script>
import DialogEditarPersonas from './Editar/DialogEditarPersonas'
export default {
  components: { DialogEditarPersonas },
  data () {
    return {
      visibleEdicion: false
    }
  },
  methods: {
    visualizarEditar () {
      // aqui recibir los datos de la persona para editar
      this.visibleEdicion = true
    }
  }
}
</script>
