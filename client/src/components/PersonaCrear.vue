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
              :rules="[rules.required]"
            ></v-text-field>
            <!--Fin-->
            <v-text-field
              v-model="apellido"
              label="Apellido"
              prepend-icon="account_circle"
              required
              :rules="[rules.required]"
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
              :rules="[rules.required]"
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
                  :rules="[rules.required]"
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                  :rules="[rules.required]"
                ></v-date-picker>
              </v-menu>

            <v-text-field
              v-model="perfilOcupacional"
              label="Perfil Ocupacional"
              prepend-icon="vpn_key"
              hint="Ingrese perfil Ocupacional"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="usuario"
              label="Usuario"
              prepend-icon="account_circle"
              hint="Ingrese el usuario"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-select
              :items="roles"
              v-model="rol"
              prepend-icon="vpn_key"
              label="Rol"
              required=""
              :rules="[rules.required]"
            ></v-select>
          </v-container>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="enviar"
          >
            Crear Persona
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
      correo: '',
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      },
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
        let re = /^[A-Za-z ]+$/
        if (!re.test(nombres) || !re.test(apellidos)) {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = 'Nombre o Apellidos Inválidos.'
        } if (this.validador_ruc_y_cedula(cedula)) {
          this.$store.dispatch('crearPersona', { nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol })
            .then((resp) => {
              this.snackbar = true
              this.mensajeSnackbar = 'Persona creada exitosamente.'
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
      }
    },
    validador_ruc_y_cedula (identificacion) {
      let suma = 0
      let residuo = 0
      let pri = false
      let pub = false
      let nat = false
      let numeroProvincias = 24
      let modulo = 11
      let ok = 1
      let i
      let p1, p2, p3, p4, p5, p6, p7, p8, p9

      for (i = 0; i < identificacion.length && ok === 1; i++) {
        let n = parseInt(identificacion.charAt(i))
        if (isNaN(n)) ok = 0
      }
      if (ok === 0) {
        this.color = 'error'
        this.mensajeSnackbar = 'No puede ingresar caracteres en cédula'
        return false
      }

      if (identificacion.length < 10) {
        this.color = 'error'
        this.mensajeSnackbar = 'Dato ingresado no es válido'
        return false
      }

      /* Los primeros dos digitos corresponden al codigo de la provincia */
      let provincia = +identificacion.substring(0, 2)
      console.log(provincia > numeroProvincias)
      if (provincia < 1 || provincia > numeroProvincias) {
        this.color = 'error'
        this.mensajeSnackbar = 'El código de la provincia (dos primeros dígitos)(cédula o ruc)  es inválido'
        this.snackbar = true
        return false
      }
      /* Aqui almacenamos los digitos de la cedula en variables. */
      let d1 = +identificacion.substring(0, 1)
      let d2 = +identificacion.substring(1, 2)
      let d3 = +identificacion.substring(2, 3)
      let d4 = +identificacion.substring(3, 4)
      let d5 = +identificacion.substring(4, 5)
      let d6 = +identificacion.substring(5, 6)
      let d7 = +identificacion.substring(6, 7)
      let d8 = +identificacion.substring(7, 8)
      let d9 = +identificacion.substring(8, 9)
      let d10 = +identificacion.substring(9, 10)
      /* El tercer digito es: */
      /* 9 para sociedades privadas y extranjeros   */
      /* 6 para sociedades publicas */
      /* menor que 6 (0,1,2,3,4,5) para personas naturales */
      if (d3 === 7 || d3 === 8) {
        this.mensajeSnackbar = 'El tercer dígito ingresado es inválido'
        this.snackbar = true
        return false
      }
      /* Solo para personas naturales (modulo 10) */
      if (d3 < 6) {
        nat = true
        p1 = d1 * 2; if (p1 >= 10) p1 -= 9
        p2 = d2 * 1; if (p2 >= 10) p2 -= 9
        p3 = d3 * 2; if (p3 >= 10) p3 -= 9
        p4 = d4 * 1; if (p4 >= 10) p4 -= 9
        p5 = d5 * 2; if (p5 >= 10) p5 -= 9
        p6 = d6 * 1; if (p6 >= 10) p6 -= 9
        p7 = d7 * 2; if (p7 >= 10) p7 -= 9
        p8 = d8 * 1; if (p8 >= 10) p8 -= 9
        p9 = d9 * 2; if (p9 >= 10) p9 -= 9
        modulo = 10
      }
      /* Solo para sociedades públicas (modulo 11) */
      /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
      if (d3 === 6) {
        pub = true
        p1 = d1 * 3
        p2 = d2 * 2
        p3 = d3 * 7
        p4 = d4 * 6
        p5 = d5 * 5
        p6 = d6 * 4
        p7 = d7 * 3
        p8 = d8 * 2
        p9 = 0
      }

      /* Solo para entidades privadas (modulo 11) */
      if (d3 === 9) {
        pri = true
        p1 = d1 * 4
        p2 = d2 * 3
        p3 = d3 * 2
        p4 = d4 * 7
        p5 = d5 * 6
        p6 = d6 * 5
        p7 = d7 * 4
        p8 = d8 * 3
        p9 = d9 * 2
      }

      suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9
      residuo = suma % modulo
      /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo */
      let digitoVerificador = residuo === 0 ? 0 : modulo - residuo

      /* ahora comparamos el elemento de la posicion 10 con el dig. ver. */
      if (pub === true) {
        if (digitoVerificador !== d9 && identificacion.length === 13) {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector público es incorrecto.'
          this.snackbar = true
          return false
        }
        /* El ruc de las empresas del sector publico terminan con 0001 */
        if (identificacion.substr(9, 14) !== '0001' && identificacion.length === 13) {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector público debe terminar con 0001'
          this.snackbar = true
          return false
        }
      }

      if (pri === true) {
        if (digitoVerificador !== d10 && identificacion.length === 13) {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector privado es incorrecto.'
          this.snackbar = true
          return false
        }
        if (identificacion.substr(10, 14) !== '001' && identificacion.length === 13) {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector privado debe terminar con 001'
          this.snackbar = true
          return false
        }
      }
      if (nat === true) {
        if (digitoVerificador !== d10 && identificacion.length === 10) {
          this.color = 'error'
          this.mensajeSnackbar = 'El número de cédula de la persona natural es incorrecto.'
          this.snackbar = true
          return false
        }
        if (identificacion.length > 10 && identificacion.substr(10, 14) !== '001') {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la persona natural debe terminar con 001'
          this.snackbar = true
          return false
        }
      }
      return true
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
