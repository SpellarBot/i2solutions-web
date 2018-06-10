<template>
  <main id='Empresas'>
    <div class = 'imageLogo'>
    <span class='i2s-name'>i2Solutions Cía. Ltda.</span>
    <v-btn flat color="white"
    @click="logout"
    >
    <v-icon>exit_to_app</v-icon>
      Cerrar Sesión

    </v-btn>
  </div>
  <div class="empresas in this.$store.getters.empresas">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>Empresas:</h1>
        <v-card class='mb-4' v-for="empresa in this.$store.getters.empresas" :key="empresa.id">
          <h3>{{ empresa.nombre }}</h3>
          <div>{{ empresa.actividadComercial }}</div>
          <div>{{ empresa.razonSocial }}</div>
          <v-btn
            @click="editarEmpresa(empresa)"
          >
            Editar
          </v-btn>
          <v-btn
            @click="dashboard"
          >
            Eliminar
          </v-btn>
        </v-card>
        <v-btn
            @click="dashboard"
          >
            Regresar
          </v-btn>
      </v-flex>
    </v-layout>
  </div>
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
      mensajeSnackbar: '',
      color: '',
      snackbar: false
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
