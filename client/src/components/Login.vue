<template>
  <main id='login'>
    <div class = 'imageLogo'>
    <span class='i2s-name'>i2Solutions Cía. Ltda.</span>
  </div>
  <div class="login">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2>Iniciar Sesión</h2>
          <v-form v-model="valid">
            <v-text-field
            class="user"
              v-model="usuario"
              label="Usuario"
              required
            ></v-text-field>
            <v-text-field
            class="password"
              v-model="clave"
              label="Clave"
              required
              type="password"
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            Iniciar Sesión
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
      usuario: '',
      clave: '',
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  methods: {
    submit () {
      let usuario = this.$data.usuario
      let clave = this.$data.clave
      this.$store.dispatch('login', { usuario, clave })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'El usuario ingresado correctamente'
          this.color = 'success'
          router.push('dashboard')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
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
