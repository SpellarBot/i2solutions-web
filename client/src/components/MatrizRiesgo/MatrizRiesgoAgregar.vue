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
                          <v-card-actions>
                            <v-btn color="blue" flat @click="verValoraciónInicial(area,puesto)">Ver valoraciones</v-btn>
                          <v-btn color="blue darken-1" flat @click="agregarValoraciónInicial(area,puesto)">Agregar Valoración</v-btn>
                          </v-card-actions>
                        </v-card>
                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-flex>
                  </div>
                  <v-btn color="blue darken-1" @click="crearMatriz">Generar Matriz de Riesgo</v-btn>
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
      <v-layout row justify-center>
        <v-dialog v-model="verDialogValoracion" @keydown.esc="resetAll ()" persistent max-width="1100px">
          <v-stepper v-model="stepper">
            <v-stepper-header>
              <v-stepper-step :complete="stepper > 1" step="1">Riesgo</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="stepper > 2" step="2">Controles existentes</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="stepper > 3" step="3">Valoración del riesgo</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="stepper > 4" step="4">Criterios para establecer controles</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="5">Controles a implementar</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card>
                  <v-card-title>
                    <v-container grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 md6>
                          <span class="headline" v-if="areaValoracion !== null">Área: {{ areaValoracion.nombre }}</span>
                        </v-flex>
                        <v-flex xs12 md6>
                          <span class="headline" v-if="puestoValoracion !== null">Puesto: {{ puestoValoracion.nombre }}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form" v-model="valid">
                      <v-text-field
                        v-model = "actividad"
                        label="Actividad a evaluar" required
                        :rules="[rules.required]"
                        multi-line
                        maxlength=150
                        :counter=150
                      ></v-text-field>
                      <v-select
                        :items="riesgos"
                        label="Riesgo"
                        v-model = "riesgoValoracion"
                        required
                        :rules="[rules.required]"
                        item-text="descripcion"
                      ></v-select>
                      <v-text-field
                        v-model = "descripcionRiesgoValoracion"
                        label="Descripcion del riesgo" required
                        :rules="[rules.required]"
                        multi-line
                        maxlength=150
                        :counter=150
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                </v-card>
                <v-btn color="blue darken-1" :disabled="!valid" @click="avanzar">Continuar</v-btn>
                <v-btn color="blue darken-1" flat @click.native="resetAll ()">Salir</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card>
                  <v-card-title>
                    <span class="headline">Controles existentes</span>
                  </v-card-title>
                  <v-card-text v-if="riesgoValoracion !== null">
                    <p  class="pb-2">Aquí podrá ver los controles existentes para el riesgo: {{ riesgoValoracion.descripcion }}</p>
                    <v-container grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 md4>
                          <p><b>Controles hacia la fuente</b></p>
                          <p>{{ controlesElegidos.fuente }}</p>
                        </v-flex>
                        <v-flex xs12 md4>
                          <p><b>Controles hacia el medio</b></p>
                          <p>{{ controlesElegidos.medio }}</p>
                        </v-flex>
                        <v-flex xs12 md4>
                          <p><b>Controles hacia el individuo</b></p>
                          <p>{{ controlesElegidos.individuo }}</p>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <p  class="pt-2">Cuando esté listo, presione continuar para entrar al siguiente paso.</p>
                  </v-card-text>
                </v-card>
                <v-btn color="blue darken-1" @click="avanzar1">Continuar</v-btn>
                <v-btn color="blue darken-1" flat @click="regresar">Regresar</v-btn>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card>
                  <v-card-title>
                    <span class="headline">Valoración del riesgo</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form1" v-model="valid1">
                      <v-select
                        :items="NDList"
                        label="Nivel de deficiencia (ND)"
                        v-model = "ND"
                        required
                        :rules="[rules.requiredN]"
                        @change="changeND"
                      ></v-select>
                      <v-select
                        :items="NEList"
                        label="Nivel de Exposición (NE)"
                        v-model = "NE"
                        required
                        :rules="[rules.required]"
                        @change="changeNE"
                      ></v-select>
                      <v-text-field
                        v-model = "NP"
                        label="Nivel de Probabilidad (NP)"
                        required
                        :rules="[rules.requiredN]"
                        disabled
                      ></v-text-field>
                      <v-text-field
                        v-model = "interpretacionNP"
                        label="Interpretación del Nivel de Probabilidad (NP)"
                        required
                        :rules="[rules.required]"
                        disabled
                      ></v-text-field>
                      <v-select
                        :items="NCList"
                        label="Nivel de Consecuencia (NC)"
                        v-model = "NC"
                        required
                        :rules="[rules.requiredN]"
                        :disabled="ND===null || NE===null"
                        @change="changeNC"
                      ></v-select>
                      <v-text-field
                        v-model = "NR"
                        label="Nivel de Riesgo (NR)"
                        required
                        :rules="[rules.requiredN]"
                        disabled
                      ></v-text-field>
                      <v-text-field
                        v-model = "interpretacionNR"
                        label="Interpretación del Nivel de Riesgo (NP)"
                        required
                        :rules="[rules.required]"
                        disabled
                      ></v-text-field>
                      <v-text-field
                        v-model = "aceptabilidad"
                        label="Aceptabilidad del riesgo"
                        required
                        :rules="[rules.required]"
                        disabled
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                </v-card>
                <v-btn color="blue darken-1" :disabled="!valid1" @click="avanzar2">Continuar</v-btn>
                <v-btn color="blue darken-1" flat @click="regresar1">Regresar</v-btn>
              </v-stepper-content>
              <v-stepper-content step="4">
                <v-card>
                  <v-card-title>
                    <span class="headline">Criterios para establecer controles</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form2" v-model="valid2">
                      <v-text-field
                        v-model = "numeroExpuestos"
                        label="Número de personas expuestas"
                        required
                        :rules="[rules.required]"
                        mask="#####"
                      ></v-text-field>
                      <v-text-field
                        v-model = "peorConsecuencia"
                        label="Peor Consecuencia"
                        required
                        :rules="[rules.required]"
                        multi-line
                        maxlength=150
                        :counter=150
                      ></v-text-field>
                      <v-checkbox
                        label="¿Existe requisito legal asociado?"
                        v-model="requisitoLegal"
                      ></v-checkbox>
                    </v-form>
                  </v-card-text>
                </v-card>
                <v-btn color="blue darken-1" :disabled="!valid2" @click="avanzar3">Continuar</v-btn>
                <v-btn color="blue darken-1" flat @click="regresar2">Regresar</v-btn>
              </v-stepper-content>
              <v-stepper-content step="5">
                <v-card>
                  <v-card-title>
                    <span class="headline">Controles a implementar</span>
                  </v-card-title>
                  <v-card-text>
                    <p  class="pb-2">Aquí podrá ingresar los nuevos controles a ser implementados, separándolos por puntos. Se recomienda no poner punto final al último control que ingrese.</p>
                    <v-form ref="form3" v-model="valid3">
                    <v-container grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 md4>
                          <v-text-field
                            v-model = "controlesFuente"
                            label="Controles hacia la fuente"
                            required
                            :rules="[rules.required]"
                            multi-line
                            maxlength=150
                            :counter=150
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field
                            v-model = "controlesMedio"
                            label="Controles hacia el medio"
                            required
                            :rules="[rules.required]"
                            multi-line
                            maxlength=150
                            :counter=150
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md4>
                          <v-text-field
                            v-model = "controlesIndividuo"
                            label="Controles hacia el individuo"
                            required
                            :rules="[rules.required]"
                            multi-line
                            maxlength=150
                            :counter=150
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                  </v-card-text>
                </v-card>
                <v-btn color="blue darken-1" :disabled="!valid3" @click.native="verificar=true">Crear Valoración</v-btn>
                <v-btn color="blue darken-1" flat @click="regresar3">Regresar</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-dialog>
      </v-layout>
      <v-layout row justify-center>
        <v-dialog v-model="verValoracion" @keydown.esc="resetVista()" hide-overlay persistent max-width="600px">
          <v-card>
          <div v-if="valoracionesAMostrar.length===0">
            <p>No hay valoraciones realizadas en este puesto de trabajo</p>
            <v-btn color="blue darken-1" flat @click="resetVista()">Salir</v-btn>
          </div>
          <div v-if="valoracionesAMostrar.length>0">
            <h2>Valoraciones Realizadas</h2>
                  <div v-for="(valoracion, index) in this.valoracionesAMostrar">
                    <v-flex
                    xs10
                    md6
                    offset-md3
                    class="mb-3"
                    >
                    <v-expansion-panel>
                      <v-expansion-panel-content>
                        <div slot="header">
                              <h3>Valoración {{ index + 1 }}</h3>
                        </div>
                        <v-card>
                          <v-card-text>
                            <p><b>Riesgo:</b>{{ valoracion.riesgo }}</p>
                            <p><b>Descripción del Riesgo:</b>{{ valoracion.riesgoDescripcion }}</p>
                            <p><b>Controles existentes hacia la fuente:</b> {{ valoracion.controlesExistentesFuente }}</p>
                            <p><b>Controles existentes hacia el medio:</b> {{ valoracion.controlesExistentesMedio }}</p>
                            <p><b>Controles existentes hacia el individuo:</b> {{ valoracion.controlesExistentesIndividuo }}</p>
                            <p><b>Nivel de Deficiencia:</b> {{ valoracion.ND }}</p>
                            <p><b>Nivel de Exposición:</b> {{ valoracion.NE }}</p>
                            <p><b>Nivel de Probabilidad:</b> {{ valoracion.NP }}</p>
                            <p><b>Interpretación de Nivel de Probabilidad:</b> {{ valoracion.interpretacionNP }}</p>
                            <p><b>Nivel de Consecuencia:</b> {{ valoracion.NC }}</p>
                            <p><b>Nivel de Riesgo:</b> {{ valoracion.NR }}</p>
                            <p><b>Interpretación de Nivel de Riesgo:</b> {{ valoracion.interpretacionNR }}</p>
                            <p><b>Aceptabilidad:</b> {{ valoracion.aceptabilidad }}</p>
                            <p><b>Número de expuestos:</b> {{ valoracion.numeroExpuestos }}</p>
                            <p><b>Peor Consecuencia:</b> {{ valoracion.peorConsecuencia }}</p>
                            <p v-if="valoracion.requisitoLegal===true"><b>Tiene requisito legal:</b> Sí</p>
                            <p v-if="valoracion.requisitoLegal===false"><b>Tiene requisito legal:</b> No</p>
                            <p><b>Controles a implementar hacia la fuente:</b> {{ valoracion.controlesFuente }}</p>
                            <p><b>Controles a implementar hacia el medio:</b> {{ valoracion.controlesMedio }}</p>
                            <p><b>Controles a implementar hacia el individuo:</b> {{ valoracion.controlesIndividuo }}</p>
                          </v-card-text>
                        </v-card>
                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-flex>
                  </div>
                  <v-btn color="blue darken-1" flat @click="resetVista()">Salir</v-btn>
                </div>
              </v-card>
              </v-dialog>
            </v-layout>
            <v-layout row justify-center>
        <v-dialog v-model="verificar" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">¿Está seguro que quiere agregar la valoración? Una vez agregada, esta <b>NO</b> podrá ser eliminada después.</span>
            </v-card-title>
            <v-card-actions>
              <v-btn color="blue darken-1" @click="crearValoracion">Sí</v-btn>
              <v-btn color="blue darken-1" flat @click.native="verificar=false">No</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </footer>
  </main>
</template>
<script>
import router from '../../router'
export default {
  data () {
    return {
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
      areasYPuestos: [],
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
      riesgos: [
        {
          clasificacion: 'Biomecánico',
          descripcion: 'Postura prolongada',
          id: 1
        },
        {
          clasificacion: 'Químico',
          descripcion: 'Exposición a gases y vapores',
          id: 2
        }
      ],
      controlesExistentes: [
        {
          riesgoId: 1,
          tipo: 'fuente',
          descripcion: 'Programa de pausas activas'
        },
        {
          riesgoId: 1,
          tipo: 'individuo',
          descripcion: 'Capacitación al personal en autocuidado'
        },
        {
          riesgoId: 1,
          tipo: 'individuo',
          descripcion: 'Capacitación en higiene postural'
        }
      ],
      controlesElegidos: {
        fuente: 'N.A.',
        medio: 'N.A.',
        individuo: 'N.A.'
      },
      ND: null,
      NE: null,
      NP: null,
      interpretacionNP: null,
      NC: null,
      NR: null,
      interpretacionNR: null,
      aceptabilidad: null,
      NDList: [
        {
          text: 'Bajo (0)',
          value: 0
        },
        {
          text: 'Medio (2)',
          value: 2
        },
        {
          text: 'Alto (6)',
          value: 6
        },
        {
          text: 'Muy Alto (10)',
          value: 10
        }
      ],
      NEList: [
        {
          text: 'Esporádica (1)',
          value: 1
        },
        {
          text: 'Ocasional (2)',
          value: 2
        },
        {
          text: 'Frecuente (3)',
          value: 3
        },
        {
          text: 'Continua (4)',
          value: 4
        }
      ],
      NCList: [
        {
          text: 'Leve (10)',
          value: 10
        },
        {
          text: 'Grave (25)',
          value: 25
        },
        {
          text: 'Muy Grave (60)',
          value: 60
        },
        {
          text: 'Mortal/Catastrófico (100)',
          value: 100
        }
      ],
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
    changedValueEstablecimiento: function (value) {
      this.validaciones.length = 0
      this.obtenerAreasPuestos(value)
    },
    obtenerAreasPuestos (value) {
      this.$store.dispatch('getPuestosFromEstablecimiento', value.id)
        .then((resp) => {
          this.areasYPuestos = this.$store.getters.areasPuestos
          let z = 0
          for (let i = 0; i < this.areasYPuestos.length; i++) {
            for (let j = 0; j < this.areasYPuestos[i].puestos.length; j++) {
              console.log('here')
              this.areasYPuestos[i].puestos[j].uniqueId = z
              console.log('yup')
              this.validaciones[z] = false
              z++
            }
          }
          console.log(this.validaciones)
          this.establecimientoValid = true
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    agregarValoraciónInicial (area, puesto) {
      console.log(area)
      this.areaValoracion = area
      this.puestoValoracion = puesto
      this.verDialogValoracion = true
    },
    avanzar () {
      let riesgoId = this.riesgoValoracion.id
      // cargar los controles existentes por puesto y riesgo, es decir, uso el id puesto y el id riesgo
      for (let i = 0; i < this.controlesExistentes.length; i++) {
        let control = this.controlesExistentes[i]
        if (control.tipo === 'fuente' && control.riesgoId === riesgoId) {
          if (this.controlesElegidos.fuente === 'N.A.') {
            this.controlesElegidos.fuente = this.controlesElegidos.fuente.replace('N.A.', control.descripcion)
            console.log(this.controlesElegidos.fuente)
          } else {
            this.controlesElegidos.fuente += '. ' + control.descripcion
          }
        }
        if (control.tipo === 'medio' && control.riesgoId === riesgoId) {
          if (this.controlesElegidos.medio === 'N.A.') {
            this.controlesElegidos.medio = this.controlesElegidos.medio.replace('N.A.', control.descripcion)
            console.log(this.controlesElegidos.medio)
          } else {
            this.controlesElegidos.medio += '. ' + control.descripcion
          }
        }
        if (control.tipo === 'individuo' && control.riesgoId === riesgoId) {
          if (this.controlesElegidos.individuo === 'N.A.') {
            this.controlesElegidos.individuo = this.controlesElegidos.individuo.replace('N.A.', control.descripcion)
            console.log(this.controlesElegidos.individuo)
          } else {
            this.controlesElegidos.individuo += '. ' + control.descripcion
          }
        }
      }
      this.stepper = 2
    },
    regresar () {
      this.controlesElegidos.fuente = 'N.A.'
      this.controlesElegidos.medio = 'N.A.'
      this.controlesElegidos.individuo = 'N.A.'
      this.stepper = 1
    },
    avanzar1 () {
      this.stepper = 3
    },
    changeND: function (value) {
      if (this.NE !== null) {
        this.NP = this.NE * value
        if (this.NP <= 4) {
          this.interpretacionNP = 'Bajo'
        } else if (this.NP >= 6 && this.NP <= 8) {
          this.interpretacionNP = 'Medio'
        } else if (this.NP >= 10 && this.NP <= 20) {
          this.interpretacionNP = 'Alto'
        } else {
          this.interpretacionNP = 'Muy Alto'
        }
        if (this.NC !== null) {
          this.NR = this.NC * this.NP
          if (this.NR <= 20) {
            this.interpretacionNR = 'IV'
            this.aceptabilidad = 'Aceptable'
          } else if (this.NR >= 40 && this.NR <= 120) {
            this.interpretacionNR = 'III'
            this.aceptabilidad = 'Aceptable'
          } else if (this.NR >= 150 && this.NR <= 500) {
            this.interpretacionNR = 'II'
            this.aceptabilidad = 'Aceptable con control específico'
          } else {
            this.interpretacionNR = 'I'
            this.aceptabilidad = ' No aceptable'
          }
        }
      }
    },
    changeNE: function (value) {
      if (this.ND !== null) {
        this.NP = value * this.ND
        if (this.NP <= 4) {
          this.interpretacionNP = 'Bajo'
        } else if (this.NP >= 6 && this.NP <= 8) {
          this.interpretacionNP = 'Medio'
        } else if (this.NP >= 10 && this.NP <= 20) {
          this.interpretacionNP = 'Alto'
        } else {
          this.interpretacionNP = 'Muy Alto'
        }
        if (this.NC !== null) {
          this.NR = this.NC * this.NP
          if (this.NR <= 20) {
            this.interpretacionNR = 'IV'
            this.aceptabilidad = 'Aceptable'
          } else if (this.NR >= 40 && this.NR <= 120) {
            this.interpretacionNR = 'III'
            this.aceptabilidad = 'Aceptable'
          } else if (this.NR >= 150 && this.NR <= 500) {
            this.interpretacionNR = 'II'
            this.aceptabilidad = 'Aceptable con control específico'
          } else {
            this.interpretacionNR = 'I'
            this.aceptabilidad = ' No aceptable'
          }
        }
      }
    },
    changeNC: function (value) {
      if (this.NP !== null) {
        this.NR = value * this.NP
        if (this.NR <= 20) {
          this.interpretacionNR = 'IV'
          this.aceptabilidad = 'Aceptable'
        } else if (this.NR >= 40 && this.NR <= 120) {
          this.interpretacionNR = 'III'
          this.aceptabilidad = 'Aceptable'
        } else if (this.NR >= 150 && this.NR <= 500) {
          this.interpretacionNR = 'II'
          this.aceptabilidad = 'Aceptable con control específico'
        } else {
          this.interpretacionNR = 'I'
          this.aceptabilidad = ' No aceptable'
        }
      }
    },
    regresar1 () {
      this.stepper = 2
    },
    avanzar2 () {
      this.stepper = 4
    },
    regresar2 () {
      this.stepper = 3
    },
    avanzar3 () {
      if (this.numeroExpuestos > this.puestoValoracion.cantidadPersonas) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'La cantidad de expuestos es mayor a la cantidad de personas existentes en ese puesto.'
      } else {
        this.stepper = 5
      }
    },
    regresar3 () {
      this.stepper = 4
    },
    crearValoracion () {
      let areaNombre = this.areaValoracion.nombre
      let puestoId = this.puestoValoracion.id
      let riesgoId = this.riesgoValoracion.id
      let puestoNombre = this.puestoValoracion.nombre
      let actividad = this.actividad
      let riesgo = this.riesgoValoracion.descripcion
      let riesgoDescripcion = this.descripcionRiesgoValoracion
      let controlesExistentesFuente = this.controlesElegidos.fuente
      let controlesExistentesMedio = this.controlesElegidos.medio
      let controlesExistentesIndividuo = this.controlesElegidos.individuo
      let ND = this.ND
      let NE = this.NE
      let NP = this.NP
      let interpretacionNP = this.interpretacionNP
      let NC = this.NC
      let NR = this.NR
      let interpretacionNR = this.interpretacionNR
      let aceptabilidad = this.aceptabilidad
      let numeroExpuestos = Number(this.numeroExpuestos)
      let peorConsecuencia = this.peorConsecuencia
      let requisitoLegal = this.requisitoLegal
      let controlesFuente = this.controlesFuente
      let controlesMedio = this.controlesMedio
      let controlesIndividuo = this.controlesIndividuo
      let valoracion = {
        areaNombre,
        puestoNombre,
        puestoId,
        actividad,
        riesgo,
        riesgoDescripcion,
        controlesExistentesFuente,
        controlesExistentesMedio,
        controlesExistentesIndividuo,
        ND,
        NE,
        NP,
        interpretacionNP,
        NC,
        NR,
        interpretacionNR,
        aceptabilidad,
        numeroExpuestos,
        peorConsecuencia,
        requisitoLegal,
        controlesFuente,
        controlesMedio,
        controlesIndividuo
      }
      this.valoraciones.push(valoracion)
      console.log(this.valoraciones)
      let listaControlesFuente = controlesFuente.split('. ')
      for (let i = 0; i < listaControlesFuente.length; i++) {
        let descripcion = listaControlesFuente[i]
        let estaImplementado = false
        let tipo = 'fuente'
        let control = {
          puestoId,
          riesgoId,
          descripcion,
          tipo,
          estaImplementado
        }
        this.controles.push(control)
      }
      let listaControlesMedio = controlesMedio.split('. ')
      for (let i = 0; i < listaControlesMedio.length; i++) {
        let descripcion = listaControlesMedio[i]
        let estaImplementado = false
        let tipo = 'medio'
        let control = {
          puestoId,
          riesgoId,
          descripcion,
          tipo,
          estaImplementado
        }
        this.controles.push(control)
      }
      let listaControlesIndividuo = controlesIndividuo.split('. ')
      for (let i = 0; i < listaControlesIndividuo.length; i++) {
        let descripcion = listaControlesIndividuo[i]
        let estaImplementado = false
        let tipo = 'individuo'
        let control = {
          puestoId,
          riesgoId,
          descripcion,
          tipo,
          estaImplementado
        }
        this.controles.push(control)
      }
      this.validaciones[this.puestoValoracion.uniqueId] = true
      console.log(this.controles)
      this.resetAll()
    },
    resetAll () {
      this.$data.valid = false
      this.$data.valid1 = false
      this.$data.valid2 = false
      this.$data.valid3 = false
      this.$refs.form.reset()
      this.$refs.form1.reset()
      this.$refs.form2.reset()
      this.$refs.form3.reset()
      this.controlesElegidos.fuente = 'N.A.'
      this.controlesElegidos.medio = 'N.A.'
      this.controlesElegidos.individuo = 'N.A.'
      this.NP = null
      this.interpretacionNP = null
      this.NR = null
      this.interpretacionNR = null
      this.aceptabilidad = null
      this.stepper = 1
      this.verDialogValoracion = false
      this.verificar = false
    },
    crearMatriz () {
      let puedoCrear = true
      for (let i = 0; i < this.validaciones.length; i++) {
        if (this.validaciones[i] === false) {
          puedoCrear = false
          break
        }
      }
      if (puedoCrear === false) {
        this.color = 'error'
        this.snackbar = true
        this.mensajeSnackbar = 'Tiene que agregar al menos una valoración de riesgo por cada puesto.'
      } else {
        this.toServer.establecimientosId = this.establecimientoSelected.id
        this.toServer.datos = this.valoraciones
        let establecimientosId = this.toServer.establecimientosId
        let datos = this.toServer.datos
        let controlesData = JSON.stringify(this.controles)
        this.$store.dispatch('crearMatrizRiesgo', { establecimientosId, datos })
          .then((resp) => {
            this.color = 'success'
            this.snackbar = true
            this.mensajeSnackbar = 'Matriz creada con éxito. Regresando al menú principal.'
            setTimeout(function () { router.push('/') }, 2000)
          })
          .catch((err) => {
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          })
      }
    },
    verValoraciónInicial (area, puesto) {
      this.areaValoracion = area
      this.puestoValoracion = puesto
      for (let i = 0; i < this.valoraciones.length; i++) {
        if (this.valoraciones[i].puestoId === this.puestoValoracion.id) {
          this.valoracionesAMostrar.push(this.valoraciones[i])
        }
      }
      this.verValoracion = true
    },
    resetVista () {
      this.valoracionesAMostrar.length = 0
      this.verValoracion = false
    }
  }
}
</script>
