<template>
  <main id="CardPersonas">
        <div><b>Nombres y Apellido: </b> {{ nombreCompleto }} </div>
        <v-btn
              fab
              :class="'editarPersona' + personas.id"
              dark
              right
              small
              color="blue"
              absolute
              @click="visualizarEditar(personas, fecha(personas.fechaNacimiento))"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
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
              @click="eliminarPersona()"
              v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
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
            :personaNombres="personaNombres"
            :personaApellidos="personaApellidos"
            :personaFechaNacimiento="personaFechaNacimiento"
            :personaRol="personaRol"
            :personaCorreo="personaCorreo"
            :personaCedula="personaCedula"
            :personaTelefono="personaTelefono"
            :personaPerfilOcupacional="personaPerfilOcupacional"
            :personaUsuario="personaUsuario"
            :personaId="personaId"
            @close="visibleEdicion=false"
            ></DialogEditarPersonas>

            <v-layout row justify-center>
              <v-dialog v-model="eliminarDialogPersona" persistent max-width="290">
                <v-card>
                  <v-card-title class="headline">Eliminar</v-card-title>
                  <v-card-text>¿Está seguro que quiere eliminar esta Persona?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" flat @click.native="eliminarDialogPersona = false">No</v-btn>
                    <v-btn color="blue darken-1" flat @click = "borrarPersona()">Sí</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </footer>
  </main>
</template>
<script>
import DialogEditarPersonas from './Editar/DialogEditarPersonas'
// import index from '../router'
const moment = require('moment')
export default {
  props: [ 'persona', 'deleteMode', 'indexE', 'indexA', 'indexP', 'personasId' ],
  components: { DialogEditarPersonas },
  data () {
    return {
      visibleEdicion: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialogPersona: false,
      personaNombres: '',
      personaApellidos: '',
      personaFechaNacimiento: '',
      personaRol: '',
      personaCorreo: '',
      personaCedula: '',
      personaTelefono: '',
      personaPerfilOcupacional: '',
      personaUsuario: '',
      personaId: ''
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
    visualizarEditar (persona, fecha) {
      this.personaId = persona.id
      this.personaNombres = persona.nombres
      this.personaApellidos = persona.apellidos
      this.personaFechaNacimiento = fecha
      this.personaCorreo = persona.correo
      this.personaCedula = persona.cedula
      this.personaRol = persona.rol
      this.personaPerfilOcupacional = persona.perfilOcupacional
      this.personaTelefono = persona.telefono
      this.personaUsuario = persona.usuario
      this.visibleEdicion = true
    },

    eliminarPersona () {
      this.eliminarDialogPersona = true
    },
    borrarPersona () {
      this.eliminarDialogPersona = false
      let personasId = Number(this.persona.id)
      this.$store.dispatch('deletePersona', personasId)
        .then((resp) => {
          console.log('entre')
          if (this.deleteMode === 1) {
            this.$store.getters.personas.splice(this.indexE, 1)
          } else if (this.deleteMode === 2) {
            this.$store.getters.personas.splice(this.indexA, 1)
          } else {
            this.$store.getters.personas.splice(this.indexP, 1)
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Persona borrada con exito.'
          this.color = 'success'
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    }
  }
}
</script>
