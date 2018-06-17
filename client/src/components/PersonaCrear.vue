<template>
  <main id='crearPersona'>
  <app-navbar></app-navbar>
  <div class="crearPersona">
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2 class="titulo">Ingreso datos de las personas</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!--nombre inicio-->
          <v-container class="contenedor" grid-list-md>
            <v-text-field
              v-model="nombre"
              label="Nombre"
              prepend-icon="account_circle"
              required
            ></v-text-field>
            <!--Fin-->
            <v-text-field
              v-model="apellido"
              label="Apellido"
              prepend-icon="account_circle"
              required
            ></v-text-field>
              <!--Fin-->
            <v-text-field
              v-model="correo"
              label="Correo"
              :rules="emailRules"
              prepend-icon="contact_mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="cedula"
              label="Cédula"
              maxlength=10
              :rules="cedulaRules"
              :error-messages="errors.collect('cedula')"
              v-validate="'required | max:10'"
              prepend-icon="vpn_key"
              required
              :counter=10
            ></v-text-field>
            <v-text-field
              v-model="clave"
              label="Clave"
              prepend-icon="vpn_key"
              required
            ></v-text-field>

            <v-text-field
              v-model="telefono"
              label="Télefono"
              maxlength=10
              :rules="telefonoRules"
              prepend-icon="contact_phone"
              :error-messages="errors.collect('telefono')"
              v-validate="'required | max:10'"
              :nudge-right="40"
              required
              counter="10"
            ></v-text-field>
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  label="Fecha de Nacimiento"
                  prepend-icon="event"
                  readonly
                  required
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>

            <v-text-field
              v-model="perfilOcupacional"
              label="Perfil Ocupacional"
              prepend-icon="vpn_key"
              hint="Ingrese perfil Ocupacional"
              required
            ></v-text-field>
            <v-text-field
              v-model="usuario"
              label="Usuario"
              prepend-icon="account_circle"
              hint="Ingrese el usuario"
              required
            ></v-text-field>
            <v-select
              :items="roles"
              v-model="rol"
              prepend-icon="vpn_key"
              label="Rol"
              required=""
            ></v-select>
          </v-container>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="enviar"
          >
            Crear Persona
          </v-btn>
          <v-btn
            @click="limpiar"
          >
            Limpiar
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
  </div>
</main>
</template>

<script>
import router from '../router'

// import { throws } from 'assert'
export default {
  data () {
    return {
      valid: false,
      nombre: '',
      usuario: '',
      apellido: '',
      cedula: '',
      clave: '',
      telefono: '',
      date: null,
      menu: false,
      perfilOcupacional: '',
      rol: '',
      color: '',
      snackbar: false,
      roles: [{
        value: 'Jefe de Seguridad',
        text: 'Jefe de Seguridad'
      },
      {
        value: 'Inspector de Seuridad',
        text: 'Inspector de Seguridad'
      },
      {
        value: 'Empleado',
        text: 'Empleado'
      }
      ],
      correo: '',
      emailRules: [
        v => !!v || 'El campo correo es obligatorio',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingrese correo válido'
      ],
      cedulaRules: [
        v => !!v || 'cédula es requerido',
        v => (v && v.length >= 10) || 'La cédula debe tener 10 caracteres',
        v => (!Number.isNaN(parseInt(v))) || 'cédula no valida'
      ],
      telefonoRules: [
        v => !!v || 'telefono es requerido',
        v => (v && v.length >= 10) || 'Teléfono debe tener 10 caracteres',
        v => (!Number.isNaN(parseInt(v))) || 'célular no valido'
      ]
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'Año'))
    }
  },
  methods: {
    limpiar () {
      this.$refs.form.reset()
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    enviar () {
      if (this.$refs.form.validate()) {
        let nombres = this.$data.nombre
        let apellidos = this.$data.apellido
        let correo = this.$data.correo
        let cedula = this.$data.cedula
        let clave = this.$data.clave
        let telefono = this.$data.telefono
        let fechaNacimiento = this.$data.date
        let usuario = this.$data.usuario
        let perfilOcupacional = this.$data.perfilOcupacional
        let rol = this.$data.rol
        this.$store.dispatch('crearPersona', { nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol })
          .then((resp) => {
            this.snackbar = true
            this.mensajeSnackbar = 'Persona creada exitosamente.'
            this.color = 'success'
            router.push('dashboard')
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      }
    },
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageLogo {
  background-color: #1394CE;
  padding: 10px;
  margin-bottom: 30px;
  text-align: left !important;
}
.i2s-name {
  text-align: left !important;
  padding: 20px;
  color: white;
  font-size: 40px;
}

.titulo{
  color:blue;
}
.contenedor{
  padding-left: 3%;
}
v-text-field{
  padding: 10px;
}
</style>
