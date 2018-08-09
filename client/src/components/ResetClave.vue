<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title> Cambio de clave</v-toolbar-title>
            <v-spacer></v-spacer>              
          </v-toolbar>
          <v-card-text>
                <v-flex xs10 sm6 md10 offset-md1>
                  <v-form v-model="valid">
                    <v-text-field
                      v-model="clave"
                      :rules="claveRules"
                      label="Clave"
                      maxlength=50
                      type="password"
                      required
                    ></v-text-field>
                  </v-form>
                </v-flex>
                <v-flex xs10 sm6 md10 offset-md1>
                  <v-form v-model="valid">
                    <v-text-field
                      v-model="clave_2"
                      :rules="[claveRules, compareClave()]"
                      label="repita la clave"
                      type="password"
                      maxlength=50
                      required
                    ></v-text-field>
                  </v-form>
                </v-flex>
                <v-btn
                  :disabled="!valid"
                  @click="submit"
                  color="info"
                >
                ENVIAR
                </v-btn>
          </v-card-text>
        </v-card>
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
  </v-container>
</template>
<script>
import Vue from 'vue'
export default {
  data: () => ({
    valid: false,
    clave: '',
    clave_2: '',
    token: '',
    claveRules: [
      v => !!v || 'Clave es requerida',
      v => v.length >= 5 || 'La clave debe contener al menos 5 caracteres',
      v => v.length <= 50 || 'la clave no puede superar los 50 caracteres'
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
            setTimeout(function () { window.location.href = '/' }, 4000)
          } else {
            this.snackbar = true
            this.mensajeSnackbar = resp.body.datos
            this.color = 'error'
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    compareClave () {
      if (this.clave_2 === this.clave) {
        return true
      }
      return 'la clave no coincide'
    }
  }
}

</script>
