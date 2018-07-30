<template>
  <div id='navbar'>
  <v-toolbar color="blue darken-2">
    <v-toolbar-title color="white" id="title"
    @click="ToDashboard" >
      i2Solutions Cía. Ltda.
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="$store.getters.usuario.rol === 'admin-empresa' || $store.getters.usuario.rol === 'admin-i2solutions'" flat color="white"
      @click="crearPersona" >
        Agregar Persona
      </v-btn>
      <v-btn flat color="white"
      @click="logout" >
        <v-icon>exit_to_app</v-icon>
        Cerrar Sesión
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
import router from '../router'
// import MyModule from './MyModule.js'
export default {
  data () {
    return {
      valid: true,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      dialog: false
    }
  },
  methods: {
    logout () {
      // console.log(MyModule('1310539752002'))
      this.$store.dispatch('logout')
      router.push('/')
    },
    crearEstablecimiento () {
      this.$store.dispatch('empresas')
      router.push('/crearEstablecimiento')
    },
    crearArea () {
      router.push('/crearArea')
    },
    crearPersona () {
      router.push('/crearPersona')
    },
    ToDashboard () {
      if (this.$store.getters.usuario.rol === 'admin-i2solutions') {
        router.push('/dashboard')
      } else {
        let empId = this.$store.getters.usuario.empresasId
        router.push('/dashboard/' + empId)
      }
    },
    verAreas () {
      this.$store.dispatch('getAreas')
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
#title{
  cursor: pointer;
  color: white;
}
</style>
