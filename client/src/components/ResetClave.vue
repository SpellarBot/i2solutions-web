<template>
    <div class="crearClave">
      <app-navbar></app-navbar>
      <v-layout>
        <v-flex xs12 sm4 offset-sm4>
          <h1>Reset Clave</h1>
          <v-form v-model="valid">
            <v-text-field
              v-model="clave"
              :rules="claveRules"
              label="Clave"
              required
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
            color="info"
          >
          ENVIAR
          </v-btn>
        </v-flex>
      </v-layout>
      <v-snackbar
      :timeout="5000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  data: () => ({
    valid: false,
    clave: '',
    token: '',
    claveRules: [
      v => !!v || 'Clave es requerida',
      v => v.length >= 5 || 'La clave debe contener al menos 5 caracteres'
    ],
    mensajeSnackbar: '',
    color: '',
    snackbar: false
  }),
  created () {
    // console.log('route', this.$router.params)
  },
  beforeMount () {
    this.token = this.$route.params['token']
  },
  methods: {
    submit () {
      let token = this.token
      let clave = this.clave
      console.log('aaa')
      Vue.http.post(`/api/web/personas/crear_clave/${token}`, { clave })
        .then((resp) => {
          if (resp.body.estado) {
            this.snackbar = true
            this.mensajeSnackbar = 'Creada clave correctamente, sera redirigido a pagina principal'
            this.color = 'success'
            setTimeout(function(){ window.location.href = '/' }, 4000)
          } else {
            this.snackbar = true
            this.mensajeSnackbar = resp.body.datos
            this.color = 'error'
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>
