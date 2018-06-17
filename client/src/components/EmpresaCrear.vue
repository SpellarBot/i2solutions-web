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
              v-model="nombre"
              label="Nombre"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
              v-model="actividadComercial"
              label="Actividad Comercial"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
              v-model="razonSocial"
              label="Razon Social"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
              v-model="direccion"
              label="Dirección"
              :rules="[rules.required]"
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
      if (ruc.length < 13) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'El RUC debe contener 13 dígitos.'
      } else {
        this.$store.dispatch('crearEmpresa', { nombre, actividadComercial, razonSocial, direccion, ruc })
          .then((resp) => {
            this.snackbar = true
            this.mensajeSnackbar = 'Empresa creada exitosamente.'
            this.color = 'success'
            this.$store.dispatch('getEmpresas')
              .then((resp) => {
                router.push('empresas')
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

</style>
