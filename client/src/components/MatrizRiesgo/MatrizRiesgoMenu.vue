<template>
  <main id="matrizRiesgoMenu">
    <app-navbar></app-navbar>
    <br>
    <h1>Matriz de Riesgos</h1>
    <br>
    <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
          xs10
          md4
          offset-md1

        >
        <v-card
        height="100%"
            raised
            hover
            @click.native="crearMatriz"
            >
            <v-card-title  class="justify-center">
                <p class="headline">Crear Matriz de Riesgos</p>
              </v-card-title>
          </v-card>
        </v-flex>
        <v-flex
          xs10
          md4
          offset-md2
        >
        <v-card
        height="100%"
            raised
            hover
            @click.native="verMatriz"
            ><v-card-title  class="justify-center">
                <p class="headline">Ver Matrices de Riesgos</p>
              </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
  import router from '../../router'
  export default {
    data () {
    return {
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
    }
  },
    methods: {
      crearMatriz () {
        this.verEmpresas()
        router.push('/matrizRiesgo/agregar')
      },
      verEmpresas () {
      this.$store.dispatch('getEmpresas')
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
      verMatriz () {
        router.push('/matrizRiesgo/ver')
      }
    }
  }
</script>
