<template>
  <main id="DialogEditarAccidentes">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Accidente</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                :class="'nombreAccidente' + this.accidenteId"
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                :class="'descripcionAccidente' + this.accidenteId"
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required]"
                  multi-line
                  maxlength=100
                  :counter=100
                ></v-text-field>
                <v-menu
                :class="'fechaAccidente' + this.accidenteId"
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="newDate"
                  label="Fecha"
                  readonly
                  required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                  :rules="[rules.required]"
                ></v-date-picker>
              </v-menu>
                <v-text-field
                :class="'heridosAccidente' + this.accidenteId"
                  v-model = "newHeridos"
                  label="Número Heridos" required
                  :rules="[rules.required, rules.max]"
                  maxlength=2
                  :counter=2
                ></v-text-field>
                <v-text-field
                :class="'muertosAccidente' + this.accidenteId"
                  v-model = "newMuertos"
                  label="Número Fallecidos" required
                  :rules="[rules.required, rules.max]"
                  maxlength=2
                  :counter=2
                ></v-text-field>
                <v-checkbox
                :class="'atencionAccidente' + this.accidenteId"
      label="¿Fue atendido en la empresa?"
      v-model="newCheckbox"
    ></v-checkbox>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
          <v-btn :class="'editAccidente' + this.accidenteId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
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
const moment = require('moment')
export default {
  data () {
    return {
      newNombre: '',
      newDescripcion: '',
      newDate: '',
      newHeridos: null,
      newMuertos: null,
      newCheckbox: null,
      date: null,
      menu: false,
      valid: false,
      checkbox: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      rules: {
        max: v => (!Number.isNaN(parseInt(v)) && (Number(v)<=50) ) || 'Debe ser un número y menor o igual a 50',
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
  name: 'DialogEditarAccidentes',
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'Año'))
    },
    nombre () {
      this.newNombre = this.nombre
    },
    descripcion () {
      this.newDescripcion = this.descripcion
    },
    fecha () {
      this.newDate = this.fecha
    },
    heridos () {
      this.newHeridos = this.heridos
    },
    muertos () {
      this.newMuertos = this.muertos
    },
    atencion () {
      this.newCheckbox = this.atencion
    },
    date () {
      this.newDate = moment(this.date).format('L')
    },
    checkbox () {
      this.newCheckbox = this.checkbox
    }
  },
  methods: {
    save (newDate) {
      this.$refs.menu.save(newDate)
    },
    edit () {
      let nombre = this.$data.newNombre
      let descripcion = this.$data.newDescripcion
      let fecha = moment(this.$data.newDate).format()
      let heridos = Number(this.$data.newHeridos)
      let muertos = Number(this.$data.newMuertos)
      let atendidoEnEmpresa = this.$data.newCheckbox
      let puestosId = this.accidentePuestoId
      let accidentesId = Number(this.accidenteId)
      console.log(puestosId)
      this.$store.dispatch('updateAccidente', { nombre, descripcion, fecha, heridos, muertos, atendidoEnEmpresa, puestosId, accidentesId })
        .then((resp) => {
          for (let i = 0; i < this.$store.getters.accidentes.length; i++) {
            let accidente = this.$store.getters.accidentes[i]
            if (accidente.id === accidentesId) {
              accidente.nombre = nombre
              accidente.descripcion = descripcion
              accidente.fecha = fecha
              accidente.heridos = heridos
              accidente.muertos = muertos
              if (atendidoEnEmpresa === false) {
                accidente.atendidoEnEmpresa = 0
              } else {
                accidente.atendidoEnEmpresa = 1
              }
              break
            }
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Accidente editado exitosamente.'
          this.color = 'success'
          this.$emit('close')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    }
  },
  props: ['visible', 'accidenteNombre', 'accidenteDescripcion', 'accidenteFecha', 'accidenteHeridos', 'accidenteMuertos', 'accidenteAtendidoEnEmpresa', 'accidenteId', 'accidentePuestoId'],
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
    nombre: {
      get () {
        return this.accidenteNombre
      },
      set (value) {
        this.$data.newNombre = value
      }
    },
    descripcion: {
      get () {
        return this.accidenteDescripcion
      },
      set (value) {
        this.$data.newDescripcion = value
      }
    },
    fecha: {
      get () {
        return this.accidenteFecha
      },
      set (value) {
        this.$data.newDate = value
      }
    },
    heridos: {
      get () {
        return this.accidenteHeridos
      },
      set (value) {
        this.$data.newHeridos = value
      }
    },
    muertos: {
      get () {
        return this.accidenteMuertos
      },
      set (value) {
        this.$data.newMuertos = value
      }
    },
    atencion: {
      get () {
        return this.accidenteAtendidoEnEmpresa
      },
      set (value) {
        this.$data.newCheckbox = value
      }
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
