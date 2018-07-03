<template>
  <main id='crearEmpresa'>
    <app-navbar></app-navbar>
  <div class="crearEmpresa">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2>Ingreso datos de empresa</h2>
          <v-form v-model="valid">
            <v-text-field
            class="nombre"
              v-model="nombre"
              label="Nombre"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="actividad"
              v-model="actividadComercial"
              label="Actividad Comercial"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="razon"
              v-model="razonSocial"
              label="Razon Social"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="direccion"
              v-model="direccion"
              label="Dirección"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="ruc"
              v-model="ruc"
              label="RUC"
              :rules="[rules.required]"
              required
              mask="#############"
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            Crear Empresa
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

export default {
  data () {
    return {
      valid: false,
      nombre: '',
      actividadComercial: '',
      razonSocial: '',
      mensajeSnackbar: '',
      direccion: '',
      ruc: '',
      color: '',
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
  methods: {
    submit () {
      let nombre = this.$data.nombre
      let actividadComercial = this.$data.actividadComercial
      let razonSocial = this.$data.razonSocial
      let direccion = this.$data.direccion
      let ruc = this.$data.ruc
      if (ruc.length !== 13) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'El RUC debe contener 13 dígitos.'
      } if (this.validadorRuc(ruc)) {
        this.$store.dispatch('crearEmpresa', { nombre, actividadComercial, razonSocial, direccion, ruc })
          .then((resp) => {
            this.snackbar = true
            this.mensajeSnackbar = 'Empresa creada exitosamente.'
            this.color = 'success'

            this.$store.dispatch('getEmpresas')
              .then((resp) => {
                setTimeout(function () { router.push('empresas') }, 2000)
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
    },
    validadorRuc (ruc) {
      let suma = 0
      let residuo = 0
      // let pri = false
      let pub = false
      let nat = false
      let numeroProvincias = 24
      let modulo = 11
      let ok = 1
      let i
      let p1, p2, p3, p4, p5, p6, p7, p8, p9

      for (i = 0; i < ruc.length && ok === 1; i++) {
        let n = parseInt(ruc.charAt(i))
        if (isNaN(n)) ok = 0
      }
      if (ok === 0) {
        this.color = 'error'
        this.mensajeSnackbar = 'No puede ingresar caracteres en el número'
        return false
      }

      if (ruc.length < 10) {
        this.color = 'error'
        this.mensajeSnackbar = 'El número ingresado no es válido'
        return false
      }

      /* Los primeros dos digitos corresponden al codigo de la provincia */
      let provincia = +ruc.substring(0, 2)
      console.log(provincia > numeroProvincias)
      if (provincia < 1 || provincia > numeroProvincias) {
        this.color = 'error'
        this.mensajeSnackbar = 'El código de la provincia (dos primeros dígitos) es inválido'
        this.snackbar = true
        return false
      }
      /* Aqui almacenamos los digitos de la cedula en variables. */
      let d1 = +ruc.substring(0, 1)
      let d2 = +ruc.substring(1, 2)
      let d3 = +ruc.substring(2, 3)
      let d4 = +ruc.substring(3, 4)
      let d5 = +ruc.substring(4, 5)
      let d6 = +ruc.substring(5, 6)
      let d7 = +ruc.substring(6, 7)
      let d8 = +ruc.substring(7, 8)
      let d9 = +ruc.substring(8, 9)
      let d10 = +ruc.substring(9, 10)

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
      /* Solo para sociedades publicas (modulo 11) */
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
      /* if (d3 === 9) {
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
      } */

      suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9
      residuo = suma % modulo
      /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo */
      let digitoVerificador = residuo === 0 ? 0 : modulo - residuo

      /* ahora comparamos el elemento de la posicion 10 con el dig. ver. */
      if (pub === true) {
        if (digitoVerificador !== d9) {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector público es incorrecto.'
          this.snackbar = true
          return false
        }
        /* El ruc de las empresas del sector publico terminan con 0001 */
        if (ruc.substr(9, 14) !== '0001') {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector público debe terminar con 0001'
          this.snackbar = true
          return false
        }
      }
      /*
      if (pri === true) {
        if (digitoVerificador !== d10) {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector privado es incorrecto.'
          this.snackbar = true
          return false
        }
        if (ruc.substr(10, 14) !== '001') {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la empresa del sector privado debe terminar con 001'
          this.snackbar = true
          return false
        }
      }   */
      if (nat === true) {
        if (digitoVerificador !== d10) {
          this.color = 'error'
          this.mensajeSnackbar = 'El número de cédula de la persona natural es incorrecto.'
          this.snackbar = true
          return false
        }
        if (ruc.length > 10 && ruc.substr(10, 14) !== '001') {
          this.color = 'error'
          this.mensajeSnackbar = 'El ruc de la persona natural debe terminar con 001'
          this.snackbar = true
          return false
        }
      }
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
