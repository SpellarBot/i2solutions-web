<template>
  <main id='Empresas'>
    <app-navbar></app-navbar>
  <div class="empresas in this.$store.getters.empresas">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>{{empresa.nombre}}</h1>
        <v-card class='mb-4' v-for="establecimientos in this.$store.getters.establecimientos" :key="establecimientos.id">
          <span v-if="establecimientos.editmode">
            <input v-model="establecimientos.nombres"/> <br>
            <input v-model="establecimientos.direccion"/> <br>
            <input v-model="establecimientos.ruc"/> <br>
          </span>
          <span v-else>
            <h3 v-bind:id="'nombre' + establecimientos.id">{{ establecimientos.nombres }}</h3>
            <div v-bind:id="'direccion' + establecimientos.id">{{establecimientos.direccion}}</div>
            <div v-bind:id="'ruc' + establecimientos.id">{{establecimientos.ruc}}</div>
          </span>
          <span v-if="establecimientos.editmode">
            <v-btn
              @click="save(establecimientos)"
            >
              Guardar
            </v-btn>
          </span>
          <span v-else>
            <v-btn
              @click="edit(establecimientos)"
            >
              Editar
            </v-btn>
          </span>
          <md-dialog-confirm
          :md-active.sync="active"
          md-title="¿Está seguro que quiere eliminar este establecimiento?"
          md-confirm-text="Sí"
          md-cancel-text="No"
          @md-confirm="borrarEstablecimiento (establecimientos.id)" />
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
      snackbar: false,
      empresa: this.$store.getters.empresaSelected
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
    edit (establecimiento) {
      this.$set(establecimiento, 'editmode', true)
    },
    save (establecimiento) {
      let nombres = establecimiento.nombres
      let direccion = establecimiento.direccion
      let ruc = establecimiento.ruc
      let empresasId = establecimiento.id
      this.$store.dispatch('updateEstablecimiento', { nombres, direccion, ruc, empresasId })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'establecimiento editado exitosamente.'
          this.color = 'success'
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })

      this.$set(establecimiento, 'editmode', false)
    },
    borrarEstablecimiento (establecimientoId) {
      let datos = { establecimientoId }
      this.$store.dispatch('deleteEstablecimiento', { datos })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'establecimiento borrado con exito.'
          this.color = 'success'
          this.reloadEstablecimiento()
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    reloadEstablecimiento () {
      let empresaId = this.$data.empresa.id
      this.$store.dispatch('getEstablecimientos', empresaId)
      this.$store.dispatch('getEmpresaSola', empresaId)
        .then((resp) => {
          router.push('EstablecimientoVer')
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
