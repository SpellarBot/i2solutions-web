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
                @change="changedValueEstablecimiento"
                ></v-select>
                <div v-if="establecimientoValid">
                  <h2>Áreas de trabajo</h2>
                  <div v-for="area in this.areasYPuestos" :key="area.id">
                    <v-flex
                    xs10
                    md6
                    offset-md3
                    class="mb-3"
                    >
                    <v-expansion-panel>
                      <v-expansion-panel-content>
                        <div slot="header">
                              <h3>{{ area.nombre }}</h3>
                        </div>
                        <v-card v-for="puesto in area.puestos" :key="puesto.id">
                          <v-card-text>
                            <h4>{{ puesto.nombre }}</h4>
                          </v-card-text>
                          <v-spacer></v-spacer>
                          <v-card-options>
                            <v-btn color="blue" flat>Ver valoraciones</v-btn>
                          <v-btn color="blue darken-1" flat>Agregar Valoración</v-btn>
                          </v-card-options>
                        </v-card>
                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-flex>
                  </div>
                </div>
    </v-container>
  </main>
</template>
<script>
  import router from '../../router'
  export default {
    data () {
    return {
      empresas: [],
      empresaSelected: null,
      establecimientos: [],
      establecimientoSelected: null,
      empresaValid: false,
      establecimientoValid: false,
      areasYPuestos: [],
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
        }
      }
    },
    mounted() {
      this.empresas = this.$store.getters.empresas
    },
    methods: {
      changedValueEmpresa: function(value) {
        this.obtenerEstablecimientos(value)
      },
      obtenerEstablecimientos (value) {
        this.$store.dispatch('getEstablecimientosFront', value.id)
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
      changedValueEstablecimiento: function(value) {
        this.obtenerAreasPuestos(value)
      },
      obtenerAreasPuestos (value) {
        this.$store.dispatch('getPuestosFromEstablecimiento', value.id)
        .then((resp) => {
          this.areasYPuestos = this.$store.getters.areasPuestos
          this.establecimientoValid = true
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
