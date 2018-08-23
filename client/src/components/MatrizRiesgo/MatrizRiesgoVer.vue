<template>
  <main id="matrizRiesgoCrear">
    <app-navbar></app-navbar>
    <br>
    <h1>Crear Matriz de Riesgos</h1>
    <br>
    <v-container grid-list-md>
    <h2 class="text-md-left">Seleccione la empresa</h2>
    <v-select
                :items="empresas"
                label="Empresa"
                v-model = "empresaSelected"
                :rules="[rules.required]"
                item-text="nombre"
                item-value="id"
                @change="changedValueEmpresa"
                ></v-select>
    <h2 v-if="empresaValid" class="text-md-left">Seleccione el establecimiento</h2>
    <v-select
                v-if="empresaValid"
                :items="establecimientos"
                label="Establecimiento"
                v-model = "establecimientoSelected"
                :rules="[rules.required]"
                item-text="nombres"
                item-value="id"
                @change="changedValueEstablecimiento"
                ></v-select>
                <div v-if="establecimientoValid">
                  <h2>Matrices de riesgo: </h2>
                  <br>
                  <div v-if="this.matricesRiesgo.length===0">
                    <p> No hay matrices que mostrar</p>
                  </div>
                  <div v-for="matriz in this.matricesRiesgo" :key="matriz.id">
                    <li><a @click="descargarMatriz(matriz)">Matriz riesgo de {{ matriz.fechaCreacion }}</a></li>
                  </div>
                  <br>
                  <br>
                  <p v-if="this.matricesRiesgo.length>0">Haga clic en algún link para descargar la matriz de riesgo correspondiente</p>
                </div>
    </v-container>
    <footer>
      <v-snackbar
              :timeout="3000"
              :multi-line="true"
              :color="color"
              :top="true"
              v-model="snackbar"
            >
              {{mensajeSnackbar}}
            </v-snackbar>
    </footer>
  </main>
</template>
<script>
import router from '../../router'
export default {
  data () {
    return {
      //valores a manipular por el componente
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
      empresas: [],
      empresaSelected: null,
      establecimientos: [],
      establecimientoSelected: null,
      empresaValid: false,
      establecimientoValid: false,
      actividad: null,
      matricesRiesgo: [],
      validaciones: [],
      valoraciones: [],
      valoracionesAMostrar: [],
      controles: [],
      areaValoracion: null,
      puestoValoracion: null,
      verDialogValoracion: false,
      verValoracion: false,
      stepper: 1,
      valid: false,
      valid1: false,
      valid2: false,
      valid3: false,
      verificar: false,
      riesgoValoracion: null,
      descripcionRiesgoValoracion: null,
      toServer: {
        establecimientosId: null,
        datos: null
      },
      riesgos: [],
      ND: null,
      NE: null,
      NP: null,
      interpretacionNP: null,
      NC: null,
      NR: null,
      interpretacionNR: null,
      aceptabilidad: null,
      numeroExpuestos: null,
      peorConsecuencia: null,
      requisitoLegal: false,
      controlesFuente: null,
      controlesMedio: null,
      controlesIndividuo: null,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        requiredN: (value) => value >= 0 || 'Campo Requerido.'
      }
    }
  },
  mounted () {
    this.empresas = this.$store.getters.empresas
  },
  methods: {
    changedValueEmpresa: function (value) {
      this.validaciones.length = 0
      this.obtenerEstablecimientos(value)
    },
    obtenerEstablecimientos (value) {
      //funcion para obtener establecimientos, recibe como entrada la empresa y retorna la lista de establecimientos de la empresa
      this.$store.dispatch('getEstablecimientosFront', value)
        .then((resp) => {
          console.log('Done')
          this.establecimientos = this.$store.getters.establecimientos
          this.establecimientoSelected = null
          this.empresaValid = true
          this.establecimientoValid = false
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    changedValueEstablecimiento: function (value) {
      this.validaciones.length = 0
      console.log(value)
      this.obtenerMatricesRiesgo(value)
    },
    obtenerMatricesRiesgo (value) {
      //Funcion para obtener las matrices de riesgo. Recibe como entrada un establecimiento, y retorna la lista de matrices de riesgo que se han realizado en ese establecimiento
      console.log(value)
      this.$store.dispatch('getMatricesRiesgo', value)
        .then((resp) => {
          console.log(this.$store.getters.matricesRiesgo)
          this.matricesRiesgo = this.$store.getters.matricesRiesgo
          console.log(this.matricesRiesgo)
          this.establecimientoValid = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    descargarMatriz (matriz) {
      //Funcion para descargar la matriz de riesgo. Recibe el id de la matriz de riesgo a descargar. Genera un excel que se descarga.
      let matricesId = matriz.id
      this.$store.dispatch('descargarMatrizRiesgo', matricesId)
        .then((resp) => {
          console.log('HERE!!!')
          let a = document.createElement('a')
          document.body.appendChild(a)
          a.style = 'display: none'
          let dataToDownload = this.$store.getters.matrizDescarga
          let byteCharacters = atob(dataToDownload)

          let byteNumbers = new Array(byteCharacters.length)
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
          }
          let byteArray = new Uint8Array(byteNumbers)
          let blob = new Blob([byteArray], {type: 'application/octet-stream'})
          console.log(blob)
          let url = URL.createObjectURL(blob)
          console.log(url)
          a.href = url
          a.download = 'MatrizRiesgo' + this.empresaSelected.nombre + 'Establecimiento' + this.establecimientoSelected.nombres + 'CreadaEn' + matriz.fechaCreacion + '.xlsx'
          a.click()
          URL.revokeObjectURL(url)
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
