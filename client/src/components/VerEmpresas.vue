<template>
  <main id='Empresas'>
    <app-navbar></app-navbar>
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
          <md-dialog-confirm
          :md-active.sync="active"
          md-title="¿Está seguro que quiere eliminar esta empresa?"
          md-confirm-text="Sí"
          md-cancel-text="No"
          @md-confirm="onConfirm(empresa)" />
          <md-button class="md-primary md-raised" @click="active = true">Eliminar</md-button>
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
      active: false,
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
    },
    onConfirm (empresa) {
      let empresaId = empresa.id
      this.$store.dispatch('deleteEmpresa', empresaId)
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa Eliminada.'
          this.color = 'success'
          this.$store.dispatch('getEmpresas')
            .then((resp) => {
              console.log('no error')
              router.push('empresas')
            })
            .catch((err) => {
              this.color = 'error'
              this.snackbar = true
              this.mensajeSnackbar = err
              console.log('error 1')
            })
        })
        .catch((err) => {
          console.log(err)
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
