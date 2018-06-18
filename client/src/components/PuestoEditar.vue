<template>
  <main id='editarPuesto'>
    <app-navbar></app-navbar>
  <div class="EditarPuesto">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2>Edición datos de puesto</h2>
          <v-form v-model="valid">
            <v-text-field
            class="nombre"
              v-model="nombre"
              label="Nombre"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="descripcion"
              v-model="descripcion"
              label="Descripción"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            Editar Puesto
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
      nombre: this.$store.getters.puestoSelected.nombre,
      descripcion: this.$store.getters.puestoSelected.descripcion,
      mensajeSnackbar: '',
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
      let descripcion = this.$data.descripcion
      let puestoId = this.$store.getters.puestoSelected.id
      console.log(puestoId)
      this.$store.dispatch('updatePuesto', { puestoId, nombre, descripcion })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Puesto editado exitosamente.'
          this.color = 'success'
          this.$store.dispatch('getPuestos',this.$store.getters.areaSelected.id)
            .then((resp) => {
              router.push('puestos')
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
