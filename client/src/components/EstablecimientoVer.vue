<template>
  <main id='Empresas'>
    <app-navbar></app-navbar>
  <div class="empresas in this.$store.getters.empresas">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <h1 class='mb-4'>{{empresa.nombre}}</h1>
        <v-card class='mb-4' v-for="establecimientos in this.$store.getters.establecimientos" :key="establecimientos.id">
          <span v-if="establecimientos.editmode">
            <v-form v-model="valid">
            <v-text-field
              v-model="establecimientos.nombres"
              label="Nombre"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <!--input v-model="establecimientos.nombres"/> <br-->
            <v-text-field
              v-model="establecimientos.direccion"
              label="Dirección"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <!--input v-model="establecimientos.direccion"/> <br-->
            <v-text-field
              v-model="establecimientos.ruc"
              label="RUC"
              required
              :rules="[rules.required]"
              mask="#############"
            ></v-text-field>
            <!--input v-model="establecimientos.ruc"/> <br-->
          </v-form>
          </span>
          <span v-else>
            <h3 v-bind:id="'nombre' + establecimientos.id">{{ establecimientos.nombres }}</h3>
            <div v-bind:id="'direccion' + establecimientos.id">{{establecimientos.direccion}}</div>
            <div v-bind:id="'ruc' + establecimientos.id">{{establecimientos.ruc}}</div>
          </span>
          <span v-if="establecimientos.editmode">
            <v-btn
            :disabled="!valid"
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
            <v-btn
              @click="verArea(establecimientos.id)"
            >
              Ver Areas
          </v-btn>
          <v-btn
          color="primary" dark
              @click = "eliminarTrigger(establecimientos.id)"
          >
              Eliminar
          </v-btn>
          </span>
        </v-card>
        <v-btn
            @click="dashboard"
          >
            Regresar
          </v-btn>
      </v-flex>
    </v-layout>
  </div>
  <v-layout row justify-center>
    <v-dialog v-model="eliminarDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Eliminar</v-card-title>
        <v-card-text>¿Está seguro que quiere eliminar este establecimiento?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="eliminarDialog = false">No</v-btn>
          <v-btn color="blue darken-1" flat @click = "borrarEstablecimiento()">Sí</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
</main>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      valid: true,
      active: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      eliminarDialog: false,
      establecimientoSelectedId: 0,
      empresa: this.$store.getters.empresaSelected,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
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
      if (ruc.length < 13) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'El RUC debe contener 13 dígitos.'
      } else {
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
      }
    },
    eliminarTrigger (establecimientoId) {
      this.$data.establecimientoSelectedId = establecimientoId
      this.$data.eliminarDialog = true
    },
    borrarEstablecimiento () {
      this.$data.eliminarDialog = false
      let establecimientoId = this.$data.establecimientoSelectedId
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
    },
    verArea (establecimientoId) {
      this.$store.dispatch('getEstablecimientoSoloID', establecimientoId)
      this.$store.dispatch('getAreas', establecimientoId)
        .then((resp) => {
          router.push('areas')
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
