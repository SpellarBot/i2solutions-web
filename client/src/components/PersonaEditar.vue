<template>
  <main id='editarPersona'>
<app-navbar></app-navbar>
  <div class="editarPersona">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2 class="titulo">Ingreso datos de las personas</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container class="contenedor" grid-list-md>
            <v-text-field
              v-model="correo"
              label="Correo"
              :rules="emailRules"
              prepend-icon="contact_mail"
              required
              maxlength=100
              :counter=100
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
            <v-text-field
              v-model="usuario"
              label="Usuario"
              prepend-icon="account_circle"
              hint="Ingrese el usuario"
              required
              maxlength=25
              :counter=25
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
      valid: true,
      usuario: this.$store.getters.personaSelected.usuario,
      clave: this.$store.getters.personaSelected.clave,
      telefono: this.$store.getters.personaSelected.telefono,
      menu: false,
      rol: this.$store.getters.personaSelected.rol,
      correo: this.$store.getters.personaSelected.correo,
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
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
      emailRules: [
        v => !!v || 'El campo correo es obligatorio',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingrese correo válido'
      ],
      telefonoRules: [
        v => !!v || 'telefono es requerido',
        v => (v && v.length >= 10) || 'Teléfono debe tener 10 caracteres',
        v => (!Number.isNaN(parseInt(v))) || 'célular no valido'
      ]
    }
  },
  /* watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'Año'))
    }
  }, */
  methods: {
    limpiar () {
      this.$refs.form.reset()
    },
    /* save (date) {
      this.$refs.menu.save(date)
    }, */
    enviar () {
      if (this.$refs.form.validate()) {
        let correo = this.$data.correo
        let clave = this.$data.clave
        let telefono = this.$data.telefono
        let usuario = this.$data.usuario
        let rol = this.$data.rol
        let personasId = this.$store.getters.personaSelected.id
        console.log(personasId)
        this.$store.dispatch('updatePersona', { personasId, correo, telefono, clave, usuario, rol })
          .then((resp) => {
            this.snackbar = true
            this.mensajeSnackbar = 'Persona editada exitosamente.'
            this.color = 'success'
            this.$store.dispatch('getPersonas')
              .then((resp) => {
                setTimeout(function () { router.push('personas') }, 2000)
              })
              .catch((err) => {
                this.color = 'error'
                this.snackbar = true
                this.mensajeSnackbar = err
              })
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
