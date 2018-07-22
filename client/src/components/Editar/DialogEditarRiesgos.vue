<template>
  <main id="DialogEditarRiesgos">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Riesgo</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                :class="'tipoRiesgo' + this.riesgoId"
                  v-model = "newTipo"
                  label="Tipo de riesgo" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                :class="'porcentajeRiesgo' + this.riesgoId"
                  v-model = "newPorcentaje"
                  label="Porcentaje" required
                  :rules="[rules.required]"
                  hint="El número en porcentaje, sin incluir el símbolo de porcentaje"
                  mask="##"
                ></v-text-field>
                <v-text-field
                :class="'valoracionRiesgo' + this.riesgoId"
                  v-model = "newValoracion"
                  label="Valoración" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                :class="'valoracionLiteralRiesgo' + this.riesgoId"
                  v-model = "newValoracionLiteral"
                  label="ValoracionLiteral" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                :class="'personasExpuestasRiesgo' + this.riesgoId"
                  v-model = "newPersonasExpuestas"
                  label="Personas Expuestas" required
                  :rules="[rules.required]"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
          <v-btn :class="'editRiesgo' + this.riesgoId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
export default {
  data () {
    return {
      newTipo: '',
      newPorcentaje: '',
      newValoracion: '',
      newValoracionLiteral: '',
      newPersonasExpuestas: '',
      valid: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
  props: ['visible', 'riesgoTipoRiesgo', 'riesgoPorcentajeRiesgo', 'riesgoValoracion', 'riesgoValoracionLiteral', 'riesgoPersonasExpuestas', 'riesgoId', 'puestoId', 'riesgoFecha'],
  watch: {
    tipo () {
      this.newTipo = this.tipo
    },
    porcentaje () {
      this.newPorcentaje = this.porcentaje
    },
    valoracion () {
      this.newValoracion = this.valoracion
    },
    valoracionLiteral () {
      this.newValoracionLiteral = this.valoracionLiteral
    },
    personasExpuestas () {
      this.newPersonasExpuestas = this.personasExpuestas
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },
    tipo: {
      get () {
        return this.riesgoTipoRiesgo
      },
      set (value) {
        this.$data.newTipo = value
      }
    },
    porcentaje: {
      get () {
        return this.riesgoPorcentajeRiesgo
      },
      set (value) {
        this.$data.newPorcentaje = value
      }
    },
    valoracion: {
      get () {
        return this.riesgoValoracion
      },
      set (value) {
        this.$data.newValoracion = value
      }
    },
    valoracionLiteral: {
      get () {
        return this.riesgoValoracionLiteral
      },
      set (value) {
        this.$data.newValoracionLiteral = value
      }
    },
    personasExpuestas: {
      get () {
        return this.riesgoPersonasExpuestas
      },
      set (value) {
        this.$data.newPersonasExpuestas = value
      }
    }
  },
  methods: {
    edit () {
      let tipoRiesgo = this.$data.newTipo
      let porcentajeRiesgo = Number(this.$data.newPorcentaje)
      let valoracion = this.$data.newValoracion
      let valoracionLiteral = this.$data.newValoracionLiteral
      let personasExpuestas = Number(this.$data.newPersonasExpuestas)
      let riesgosId = this.riesgoId
      let fecha = this.riesgoFecha
      let puestosId = this.puestoId
      this.$store.dispatch('updateRiesgo', { tipoRiesgo, porcentajeRiesgo, valoracion, fecha, valoracionLiteral, personasExpuestas, puestosId, riesgosId })
        .then((resp) => {
          for (let i = 0; i < this.$store.getters.riesgoPuesto.length; i++) {
            let riesgo = this.$store.getters.riesgoPuesto[i]
            riesgo.tipoRiesgo = tipoRiesgo
            riesgo.porcentajeRiesgo = porcentajeRiesgo
            riesgo.valoracion = valoracion
            riesgo.valoracionLiteral = valoracionLiteral
            riesgo.personasExpuestas = personasExpuestas
            break
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Riesgo editado exitosamente.'
          this.color = 'success'
          this.$emit('close')
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
<style>
.izq {
  text-align: left;
}
</style>
