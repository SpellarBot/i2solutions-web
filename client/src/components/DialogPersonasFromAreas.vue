<template>
  <main id="DialogPersonasFromAreas">
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
    ></v-progress-circular>
  </div>
    </template>
    <template class="content" v-if="valid">
    <v-dialog fullscreen v-model="show" @keydown.esc="closing()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{nombreEstablecimiento}} > Área {{ this.areaNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Personas: </h1>
      <v-layout align-center justify-center row>
      <v-data-table
      :headers="headers"
      :items="personas"
      class="elevation-1"
      rows-per-page-text="Filas por página"
      :rows-per-page-items="[10,20,30,60]"
      >
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
        <td class="text-xs-left">{{ props.item.nombres }}</td>
        <td class="text-xs-left">{{ props.item.apellidos }}</td>
        <td class="text-xs-left">{{ props.item.correo }}</td>
        <!--Inicio roles-->
        <td class="text-xs-left" v-if="props.item.rol === 'admin-i2solutions'">Administrador de i2solutions</td>
        <td class="text-xs-left" v-if="props.item.rol === 'jefe-seguridad'">Jefe de Seguridad</td>
        <td class="text-xs-left" v-if="props.item.rol === 'inspector-seguridad'">Inspector de Seguridad</td>
        <td class="text-xs-left" v-if="props.item.rol === 'admin-empresa'">Administrador de la empresa</td>
        <td class="text-xs-left" v-if="props.item.rol === 'empleado'">Empleado</td>
        <!--Fin roles-->
        <td class="text-xs-left">{{ props.item.telefono }}</td>
        <td class="text-xs-left">{{ props.item.usuario }}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text class="text-xs pa-0"><b>Cédula:</b> {{ props.item.cedula }}</v-card-text>
        <v-card-text class="text-xs pa-0"><b>Fecha de nacimiento:</b> {{ fecha(props.item.fechaNacimiento) }}</v-card-text>
        <v-card-text class="text-xs pa-0"><b>Perfil Ocupacional:</b> {{ props.item.perfilOcupacional }}</v-card-text>
        <v-card-text class="text-xs pa-0"><b>Puesto:</b> {{ props.item.puestosNombre }}</v-card-text>
        <v-btn flat
          icon
            small
            left
            color="blue"
            v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
            @click="visualizarEditar(props.item, fecha(props.item.fechaNacimiento))"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn flat
          icon
            small
            color="red"
            v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
            @click="eliminarPersona(props.item)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
      </v-card>
    </template>
    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        No hay personas ingresadas en el sistema para consultar
      </v-alert>
    </template>
      </v-data-table>
    </v-layout>
    </v-card>
    </v-dialog>
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
      <v-layout row justify-center>
              <v-dialog v-model="eliminarDialogPersona" persistent max-width="290">
                <v-card>
                  <v-card-title class="headline">Eliminar</v-card-title>
                  <v-card-text>¿Está seguro que quiere eliminar esta Persona?</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" flat @click.native="eliminarDialogPersona = false">No</v-btn>
                    <v-btn :class="'borrarPersona' + this.personaId" color="blue darken-1" flat @click = "borrarPersona()">Sí</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
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
          </footer>
  </template>
  </main>
</template>
<script>
import DialogEditarPersonas from './Editar/DialogEditarPersonas'
const moment = require('moment')
export default {
  components: { DialogEditarPersonas },
  props: ['visible', 'areaId', 'areaNombre', 'nombreEstablecimiento'],
  data () {
    return {
      loading: false,
      valid: null,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      deleteMode: 1,
      eliminarDialogPersona: false,
      indexEliminar: 0,
      personas: [],
      personaId: null,
      visibleEdicion: false,
      headers: [
        {
          text: 'Nombres',
          align: 'left',
          sortable: true,
          value: 'nombres'
        },
        { text: 'Apellidos', value: 'apellidos', sortable: true },
        { text: 'Correo', value: 'correo', sortable: false },
        { text: 'Rol', value: 'rol', sortable: false },
        { text: 'Teléfono', value: 'telefono', sortable: false },
        { text: 'Usuario', value: 'usuario', sortable: false }
      ]
    }
  },
  watch: {
    show () {
      this.cargarData()
    }
  },
  name: 'DialogPersonas',
  methods: {
    fecha: function (date) {
      return moment(date).format('L')
    },
    cargarData () {
      this.valid = null
      this.loading = true
      this.personas = this.$store.getters.personas
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    closing () {
      this.$store.dispatch('emptyPersonas')
      this.show = false
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
    eliminarPersona (persona) {
      this.personaId = persona.id
      this.indexEliminar = this.personas.indexOf(persona)
      this.eliminarDialogPersona = true
    },
    borrarPersona () {
      this.eliminarDialogPersona = false
      let personasId = Number(this.personaId)
      this.$store.dispatch('deletePersona', personasId)
        .then((resp) => {
          console.log('entre')
          this.personas.splice(this.indexEliminar, 1)
          for (let i = 0; i < this.$store.getters.establecimientos.length; i++) {
            let establecimiento = this.$store.getters.establecimientos[i]
            if (establecimiento.id === this.establecimientoId) {
              establecimiento.cantidadPersonas--
              break
            }
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
</style>
