<template>
  <main id='crearEmpresa'>
    <app-navbar></app-navbar>
    <div class="empresas in this.$store.getters.empresas">
    <div>
      <v-btn @click="prueba">
      pruebas</v-btn>
    </div>
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2>Ingreso datos de establecimiento</h2>
          <v-form v-model="valid">
            <v-text-field
              v-model="nombre"
              label="Nombre"
              required
            ></v-text-field>
            <v-select
              :items = "empresas"
              item-text = "nombre"
              item-value = "id"
              v-model = "idEmpresaMatriz"
              label="Empresa matriz"
              @change="prueba"
              single-line
            ></v-select>
            <v-text-field
              v-model="direccion"
              label="Dirección"
              required
            ></v-text-field>
            <v-text-field
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
            Crear establecimiento
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
      mensajeSnackbar: '',
      direccion: '',
      ruc: '',
      color: '',
      idEmpresaMatriz: '',
      snackbar: false,
      empresas: this.$store.getters.empresas,
      rules: {
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }

    }
  },
  methods: {
    submit () {
      let nombres = this.$data.nombre
      let direccion = this.$data.direccion
      let ruc = this.$data.ruc
      let empresasId = this.$data.idEmpresaMatriz
      let datos = { nombres, direccion, ruc, empresasId }
      if (ruc.length < 13) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'El RUC debe contener 13 dígitos.'
      } else {
      this.$store.dispatch('crearEstablecimento', datos)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'establecimiento creado exitosamente.'
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
    },
    prueba () {
      console.log(this.$data.idEmpresaMatriz)
      console.log('nombre:' + this.$data.nombre)
    }
  }
}
</script>
<style>
</style>
