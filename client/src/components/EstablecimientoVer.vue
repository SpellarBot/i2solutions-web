<template>
  <main id='Empresas'>
    <app-navbar></app-navbar>
  <div class="empresas in this.$store.getters.empresas">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>{{empresa.nombre}}</h1>
        <v-card class='mb-4' v-for="establecimientos in this.$store.getters.establecimientos" :key="establecimientos.id">
          <span v-if="establecimientos.editmode">
            <v-form v-model="valid">
            <v-text-field
              v-model="establecimientos.nombres"
              label="Nombre"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <!--input v-model="establecimientos.nombres"/> <br-->
            <v-text-field
              v-model="establecimientos.direccion"
              label="Dirección"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <!--input v-model="establecimientos.direccion"/> <br-->
            <v-text-field
              v-model="establecimientos.ruc"
              label="RUC"
              required
              :rules="[rules.required]"
              mask="#############"
            ></v-text-field>
            <!--input v-model="establecimientos.ruc"/> <br-->
          </v-form>
          </span>
          <span v-else>
            <h3 v-bind:id="'nombre' + establecimientos.id">{{ establecimientos.nombres }}</h3>
            <div v-bind:id="'direccion' + establecimientos.id">{{establecimientos.direccion}}</div>
            <div v-bind:id="'ruc' + establecimientos.id">{{establecimientos.ruc}}</div>
          </span>
          <span v-if="establecimientos.editmode">
            <v-btn
            :disabled="!valid"
              @click="save(establecimientos)"
            >
              Guardar
            </v-btn>
          </span>
          <span v-else>
            <v-btn
              @click="edit(establecimientos)"
            >
              Editar
            </v-btn>
            <v-btn
              @click="verArea(establecimientos.id)"
            >
              Ver Areas
          </v-btn>
          <v-btn
          color="primary" dark
              @click = "eliminarTrigger(establecimientos.id)"
          >
              Eliminar
          </v-btn>
          </span>
        </v-card>
        <v-btn
            @click="dashboard"
          >
            Regresar
          </v-btn>
      </v-flex>
    </v-layout>
  </div>
  <v-layout row justify-center>
    <v-dialog v-model="eliminarDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Eliminar</v-card-title>
        <v-card-text>¿Está seguro que quiere eliminar este establecimiento?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="eliminarDialog = false">No</v-btn>
          <v-btn color="blue darken-1" flat @click = "borrarEstablecimiento()">Sí</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
</main>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      valid: true,
      active: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialog: false,
      establecimientoSelectedId: 0,
      empresa: this.$store.getters.empresaSelected,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    },
    dashboard () {
      router.push('dashboard')
    },
    editarEmpresa (empresa) {
      let empresaId = empresa.id
      this.$store.dispatch('getEmpresaSola', empresaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa Encontrada.'
          this.color = 'success'
          router.push('editarEmpresa')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    edit (establecimiento) {
      this.$set(establecimiento, 'editmode', true)
    },
    save (establecimiento) {
      let nombres = establecimiento.nombres
      let direccion = establecimiento.direccion
      let ruc = establecimiento.ruc
      let empresasId = establecimiento.id
      if (ruc.length < 13) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'El RUC debe contener 13 dígitos.'
      } if (this.validadorRuc(ruc)) {
        this.$store.dispatch('updateEstablecimiento', { nombres, direccion, ruc, empresasId })
          .then((resp) => {
            this.snackbar = true
            this.mensajeSnackbar = 'establecimiento editado exitosamente.'
            this.color = 'success'
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
        this.$set(establecimiento, 'editmode', false)
      }
    },
    eliminarTrigger (establecimientoId) {
      this.$data.establecimientoSelectedId = establecimientoId
      this.$data.eliminarDialog = true
    },
    borrarEstablecimiento () {
      this.$data.eliminarDialog = false
      let establecimientoId = this.$data.establecimientoSelectedId
      let datos = { establecimientoId }
      this.$store.dispatch('deleteEstablecimiento', { datos })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'establecimiento borrado con exito.'
          this.color = 'success'
          this.reloadEstablecimiento()
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    reloadEstablecimiento () {
      let empresaId = this.$data.empresa.id
      this.$store.dispatch('getEstablecimientos', empresaId)
      this.$store.dispatch('getEmpresaSola', empresaId)
        .then((resp) => {
          router.push('EstablecimientoVer')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    verArea (establecimientoId) {
      this.$store.dispatch('getEstablecimientoSoloID', establecimientoId)
      this.$store.dispatch('getAreas', establecimientoId)
        .then((resp) => {
          router.push('areas')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    // Validador de cédula y ruc
    validadorRuc (ruc) {
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
      console.log(d1)
      console.log(d2)
      console.log(d3)
      console.log(d4)
      console.log(d5)
      console.log(d6)
      console.log(d7)
      console.log(d8)
      console.log(d9)
      console.log(d10)
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
      }
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
</style>
