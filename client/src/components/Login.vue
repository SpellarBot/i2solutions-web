<template>
  <div class="login">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-form v-model="valid">
            <v-text-field
              v-model="usuario"
              label="Usuario"
              required
            ></v-text-field>
            <v-text-field
              v-model="clave"
              label="Clave"
              required
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            submit
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
</template>

<script>
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
</style>
