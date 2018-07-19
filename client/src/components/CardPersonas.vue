<template>
  <main id="CardPersonas">
        <div><b>Nombres y Apellido: </b> {{ nombreCompleto }} </div>
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
          <div v-if="personas.rol === 'admin-i2solutions'"><b>Rol:</b> Administrador de i2solutions</div>
          <div v-if="personas.rol === 'inspector-seguridad'"><b>Rol:</b> Inspector de Seguridad</div>
          <div v-if="personas.rol === 'jefe-seguridad'"><b>Rol:</b> Jefe de Seguridad</div>
          <div v-if="personas.rol === 'admin-empresa'"><b>Rol:</b> Administrador de la empresa</div>
          <div v-if="personas.rol === 'empleado'"><b>Rol:</b> Empleado</div>
          <div><b>Correo:</b> {{ personas.correo }} </div>
          <div><b>Cédula:</b> {{ personas.cedula }}</div>
          <div><b>Telefono:</b> {{ personas.telefono }}</div>
          <div><b>Fecha de Nacimiento: </b> {{ fecha(personas.fechaNacimiento) }}</div>
          <div><b>Perfil Ocupacional: </b> {{ personas.perfilOcupacional }}</div>
          <div><b>usuario:</b> {{ personas.usuario }}</div>
          <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
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
const moment = require('moment')
export default {
  props: [ 'persona' ],
  components: { DialogEditarPersonas },
  data () {
    return {
      visibleEdicion: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  computed: {
    personas: {
      get () {
        return this.persona
      }
    },
    nombreCompleto: {
      get () {
        return this.personas.nombres + ' ' + this.personas.apellidos
      }
    }
  },
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    visualizarEditar () {
      // aqui recibir los datos de la persona para editar
      this.visibleEdicion = true
    }
  }
}
</script>
