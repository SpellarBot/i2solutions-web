<template>
  <main id='crearPersona'>
  <app-navbar></app-navbar>
  <div class="crearPersona">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 >
        <v-stepper v-model="stepper" class="mt-3">
          <v-stepper-header>
              <v-stepper-step :complete="stepper > 1" step="1">Datos de la persona</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-i2solutions'" :complete="stepper > 2" step="2">Empresa</v-stepper-step>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-empresa'" :complete="stepper > 2" step="2">Establecimiento</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-i2solutions'" :complete="stepper > 3" step="3">Establecimiento</v-stepper-step>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-empresa'" :complete="stepper > 3" step="3">Área de trabajo</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-i2solutions'" :complete="stepper > 4" step="4">Área de trabajo</v-stepper-step>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-empresa'" step="4">Puesto de Trabajo</v-stepper-step>

              <v-divider v-if="$store.getters.usuario.rol === 'admin-i2solutions'"></v-divider>

              <v-stepper-step v-if="$store.getters.usuario.rol === 'admin-i2solutions'" step="5">Puesto de trabajo</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-flex xs12 sm8 offset-sm2 >
                <v-card>
          <h2>Ingreso datos de la persona</h2>
          <v-form ref="form" v-model="valid">
            <!--nombre inicio-->
          <v-container class="contenedor" grid-list-md>
            <v-text-field
              v-model="nombre"
              label="Nombres"
              prepend-icon="account_circle"
              required
              :rules="[rules.required]"
              maxlength=30
              :counter=30
            ></v-text-field>
            <!--Fin-->
            <v-text-field
              v-model="apellido"
              label="Apellidos"
              prepend-icon="account_circle"
              required
              :rules="[rules.required]"
              maxlength=30
              :counter=30
            ></v-text-field>
              <!--Fin-->
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
              v-model="cedula"
              label="Cédula"
              maxlength=10
              minlength=10
              :rules="cedulaRules"
              :error-messages="errors.collect('cedula')"
              v-validate="'required | max:10'"
              prepend-icon="vpn_key"
              required
              :counter=10
              mask="##########"
            ></v-text-field>
            <!--v-text-field
              v-model="clave"
              label="Clave"
              prepend-icon="vpn_key"
              required
              :rules="[rules.required]"
            ></v-text-field-->

            <v-text-field
              v-model="telefono"
              label="Télefono"
              maxlength=10
              minlength=10
              :rules="telefonoRules"
              prepend-icon="contact_phone"
              :error-messages="errors.collect('telefono')"
              v-validate="'required | max:10'"
              :nudge-right="40"
              required
              counter="10"
              mask="##########"
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
                  :max="maxDate"
                  min="1940-01-01"
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
              maxlength=50
              :counter=50
            ></v-text-field>
            <v-select
              :items="roles"
              v-model="rol"
              label="Rol"
              required
              :rules="[rules.required]"
            ></v-select>
            <v-text-field
              v-if="rol !== 'empleado'"
              v-model="usuario"
              label="Usuario"
              prepend-icon="account_circle"
              hint="Ingrese el usuario"
              required
              :rules="[rules.required]"
              maxlength=25
              :counter=25
            ></v-text-field>
          </v-container>
          </v-form>
        </v-card>
        <v-btn
            color="blue darken-1"
            :disabled="!valid"
            @click="continuar"
          >
            Continuar
          </v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="salir"
          >
            Salir
          </v-btn>
        </v-flex>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card>
            <v-card-title>
              <span v-if="$store.getters.usuario.rol === 'admin-i2solutions'" class="headline">Seleccione la empresa</span>
              <span v-if="$store.getters.usuario.rol === 'admin-empresa'" class="headline">Seleccione el establecimiento</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form1" v-model="valid1">
              <v-select
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
                :items="empresas"
                label="Empresa"
                v-model = "newEmpresa"
                :rules="[rules.required]"
                item-text="nombre"
                ></v-select>
                <v-select
                v-if="$store.getters.usuario.rol === 'admin-empresa'"
                :items="establecimientos"
                label="Establecimiento"
                v-model = "newEstablecimiento"
                :rules="[rules.required]"
                item-text="nombres"
                ></v-select>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn
            color="blue darken-1"
            :disabled="!valid1"
            @click="continuar1"
          >
            Continuar
          </v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="stepper=1"
          >
            Regresar
          </v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card>
            <v-card-title>
              <span v-if="$store.getters.usuario.rol === 'admin-i2solutions'" class="headline">Seleccione el establecimiento</span>
              <span v-if="$store.getters.usuario.rol === 'admin-empresa'" class="headline">Seleccione el área de trabajo</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form2" v-model="valid2">
              <v-select
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
                :items="establecimientos"
                label="Establecimiento"
                v-model = "newEstablecimiento"
                :rules="[rules.required]"
                item-text="nombres"
                ></v-select>
                <v-select
                v-if="$store.getters.usuario.rol === 'admin-empresa'"
                :items="areas"
                label="Área"
                v-model = "newArea"
                :rules="[rules.required]"
                item-text="nombre"
                ></v-select>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn
            color="blue darken-1"
            :disabled="!valid2"
            @click="continuar2"
          >
            Continuar
          </v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="stepper=2"
          >
            Regresar
          </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card>
            <v-card-title>
              <span v-if="$store.getters.usuario.rol === 'admin-i2solutions'" class="headline">Seleccione el área de trabajo</span>
              <span v-if="$store.getters.usuario.rol === 'admin-empresa'" class="headline">Seleccione el puesto de trabajo</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form3" v-model="valid3">
              <v-select
              v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
                :items="areas"
                label="Área"
                v-model = "newArea"
                :rules="[rules.required]"
                item-text="nombre"
                ></v-select>
                <v-select
                v-if="$store.getters.usuario.rol === 'admin-empresa'"
                :items="puestos"
                label="Puesto"
                v-model = "newPuesto"
                :rules="[rules.required]"
                item-text="nombre"
                ></v-select>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn
          v-if="$store.getters.usuario.rol === 'admin-empresa'"
            color="blue darken-1"
            :disabled="!valid3"
            @click="continuar3"
          >
            Agregar
          </v-btn>
          <v-btn
          v-if="$store.getters.usuario.rol === 'admin-i2solutions'"
            color="blue darken-1"
            :disabled="!valid3"
            @click="continuar3"
          >
            Continuar
          </v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="stepper=3"
          >
            Regresar
          </v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card>
            <v-card-title>
              <span class="headline">Seleccione el puesto de trabajo</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form4" v-model="valid4">
                <v-select
                :items="puestos"
                label="Puesto"
                v-model = "newPuesto"
                :rules="[rules.required]"
                item-text="nombre"
                ></v-select>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn
            color="blue darken-1"
            :disabled="!valid4"
            @click="enviar"
          >
            Agregar
          </v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="stepper=4"
          >
            Regresar
          </v-btn>
      </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
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
import MyModule from './MyModule.js'
// import { throws } from 'assert'
export default {
  data () {
    return {
      valid: false,
      valid1: false,
      valid2: false,
      valid3: false,
      valid4: false,
      nombre: '',
      usuario: '',
      apellido: '',
      cedula: '',
      clave: '',
      telefono: '',
      date: null,
      menu: false,
      perfilOcupacional: '',
      stepper: 1,
      empresas: [],
      establecimientos: [],
      areas: [],
      puestos: [],
      newEmpresa: null,
      newEstablecimiento: null,
      newArea: null,
      newPuesto: null,
      rol: '',
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
      roles: [{
        value: 'jefe-seguridad',
        text: 'Jefe de Seguridad'
      },
      {
        value: 'inspector-seguridad',
        text: 'Inspector de Seguridad'
      },
      {
        value: 'empleado',
        text: 'Empleado'
      },
      {
        value: 'admin-empresa',
        text: 'Administrador de la empresa'
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
        v => (!Number.isNaN(parseInt(v))) || 'cédula no valida',
        v => {
          if (MyModule(v)[0]) {
            return true
          }
          return MyModule(v)[1]
        }
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
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  computed: {
    maxDate: {
      get () {
        let adult = new Date()
        adult.setDate(adult.getDate() - 6600)
        let finalDate = adult.toISOString().substr(0, 10)
        return finalDate
      }
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    enviar () {
      let nombres = this.$data.nombre
      let apellidos = this.$data.apellido
      let correo = this.$data.correo
      let cedula = this.$data.cedula
      let clave = this.$data.clave
      let telefono = this.$data.telefono
      let fechaNacimiento = this.$data.date
      let usuario = this.$data.usuario
      let perfilOcupacional = this.$data.perfilOcupacional
      let puestosId = this.$data.newPuesto.id
      let rol = this.$data.rol
      if (this.validador_ruc_y_cedula(cedula)) {
        this.$store.dispatch('crearPersona', { nombres, apellidos, correo, cedula, clave, fechaNacimiento, telefono, perfilOcupacional, usuario, rol, puestosId })
          .then((resp) => {
            this.snackbar = true
            this.mensajeSnackbar = 'Persona agregada exitosamente. Regresando a la página principal'
            this.color = 'success'
            setTimeout(function () { router.push('/') }, 2000)
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      }
    },
    verificarUserMailCedula(user, mail, cedula) {      
      return new Promise((resolve, reject) => {
        let url = '/api/web/personas/buscar/existenciaDe?cedula=' + cedula + '&correo=' + mail + '&usuario='+user
        Vue.http.get(url)
          .then((resp) => {
            console.log("asdsadsaasds")
            console.log(url)
            if (resp.body.estado) {
              //si todos son falsos, significa que no existe el usuario ni mail ni correo... lo cual es bueno!
              if (!resp.body.datos.cedula && !resp.body.datos.usuario && !resp.body.datos.correo) {
                alert("yei")
                return true
              }
            } else {
              this.$store.commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
      return false
    },
    continuar () {
      let cedula = this.$data.cedula
      if (!this.validador_ruc_y_cedula(cedula) && !this.verificarUserMailCedula(this.usuario,this.correo,this.cedula)) {
      } else {
        if (this.$store.getters.usuario.rol === 'admin-empresa') {
          this.establecimientos = this.$store.getters.establecimientos
          this.stepper = 2
        } else {
          this.$store.dispatch('getEmpresas')
            .then((resp) => {
              console.log('Done')
              this.empresas = this.$store.getters.empresas
              this.stepper = 2
            })
            .catch((err) => {
              this.color = 'error'
              this.snackbar = true
              this.mensajeSnackbar = err
            })
        }
      }
    },
    continuar1 () {
      if (this.$store.getters.usuario.rol === 'admin-empresa') {
        this.$store.dispatch('getPuestosFromEstablecimiento', this.newEstablecimiento.id)
          .then((resp) => {
            this.areas = this.$store.getters.areasPuestos
            console.log('Done')
            this.stepper = 3
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      } else {
        this.$store.dispatch('getEmpresasstablecimientosFront', this.newEmpresa.id)
          .then((resp) => {
            console.log('Done')
            this.establecimientos = this.$store.getters.establecimientos
            this.stepper = 3
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      }
    },
    continuar2 () {
      if (this.$store.getters.usuario.rol === 'admin-empresa') {
        this.puestos = this.newArea.puestos
        console.log('Done')
        this.stepper = 4
      } else {
        this.$store.dispatch('getPuestosFromEstablecimiento', this.newEstablecimiento.id)
          .then((resp) => {
            console.log('Done')
            this.areas = this.$store.getters.areasPuestos
            this.stepper = 4
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      }
    },
    continuar3 () {
      if (this.$store.getters.usuario.rol === 'admin-empresa') {
        this.enviar()
      } else {
        this.puestos = this.newArea.puestos
        console.log('Done')
        this.stepper = 5
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
    },
    salir () {
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
