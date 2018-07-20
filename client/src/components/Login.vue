<template>
  <v-container fluid fill-height @keydown.enter="submit" style="margin-top: 20%;">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>i2solutions Cía. Ltda.</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" v-model="usuario" label="Usario" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" v-model= "clave" label="Password" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submit" type="submit">Login</v-btn>
          </v-card-actions>
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
  </v-container>
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
          if (this.$store.getters.usuario.rol === 'admin-i2solutions'){
            router.push('dashboard')
          }
          else {
            let empId = this.$store.getters.usuario.empresasId
            router.push('/dashboard/' + empId )
          }

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
