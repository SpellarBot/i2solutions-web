<template>
  <main id='crearEmpresa'>
    <div class = 'imageLogo'>
    <span class='i2s-name'>i2Solutions Cía. Ltda.</span>
    <v-btn flat color="white"
    @click="logout"
    >
    <v-icon>exit_to_app</v-icon>
      Cerrar Sesión

    </v-btn>
  </div>
  <div class="EditarEmpresa">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2>Edición datos de empresa</h2>
          <v-form v-model="valid">
            <v-text-field
              v-model="nombre"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              v-model="actividadComercial"
              label="Actividad Comercial"
              required
            ></v-text-field>
            <v-text-field
              v-model="razonSocial"
              label="Razon Social"
              required
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            Editar Empresa
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
      valid: true,
      nombre: this.$store.getters.empresaSelected.nombre,
      actividadComercial: this.$store.getters.empresaSelected.actividadComercial,
      razonSocial: this.$store.getters.empresaSelected.razonSocial,
      mensajeSnackbar: '',
      color: '',
      snackbar: false
    }
  },
  methods: {
    submit () {
      let nombre = this.$data.nombre
      let actividadComercial = this.$data.actividadComercial
      let razonSocial = this.$data.razonSocial
      let direccion = this.$data.direccion
      let ruc = this.$data.ruc
      this.$store.dispatch('crearEmpresa', { nombre, actividadComercial, razonSocial, direccion, ruc })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa creada exitosamente.'
          this.color = 'success'
          // router.push('dashboard')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
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
