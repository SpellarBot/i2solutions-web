<template>
  <main id="DialogEditarCapacitaciones">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Capacitación</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                :class="'temaCapacitacion' + this.capacitacionId"
                  v-model = "newTema"
                  label="Tema" required
                  :rules="[rules.required, rules.min]"
                  maxlength=50
                  minlength=2
                  :counter=50
                ></v-text-field>
                <v-text-field
                :class="'descripcionCapacitacion' + this.capacitacionId"
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required, rules.min]"
                  maxlength=100
                  minlength=2
                  :counter=100
                ></v-text-field>
                <v-menu
                :class="'fechaCapacitacion' + this.capacitacionId"
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
                :class="'capacitadorCapacitacion' + this.capacitacionId"
                  v-model = "newCapacitador"
                  label="Capacitador" required
                  :rules="[rules.required, rules.min]"
                  maxlength=50
                  minlength=2
                  :counter=50
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
          <v-btn :class="'editCapacitacion' + this.capacitacionId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
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
      newTema: '',
      newDescripcion: '',
      newDate: null,
      newCapacitador: '',
      date: null,
      menu: false,
      valid: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        min: (v) => v.length > 2 || 'Mímimo se requieres 2 letras',
        max: (v) => v.length > 50 || 'Máximo se requieres 50 letras',
        maxDes: (v) => v.length < 2 || 'Máximo se requieres 100 letras',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
  name: 'DialogEditarCapacitaciones',
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'Año'))
    },
    tema () {
      this.newTema = this.tema
    },
    descripcion () {
      this.newDescripcion = this.descripcion
    },
    fecha () {
      this.newDate = this.fecha
    },
    capacitador () {
      this.newCapacitador = this.capacitador
    },
    date () {
      this.newDate = moment(this.date).format('L')
    }
  },
  methods: {
    save (newDate) {
      this.$refs.menu.save(newDate)
    },
    edit () {
      let tema = this.$data.newTema
      let descripcion = this.$data.newDescripcion
      let fechaCapacitacion = moment(this.$data.newDate).format()
      let nombre = this.$data.newCapacitador
      let capacitacionId = this.capacitacionId
      console.log(fechaCapacitacion)
      this.$store.dispatch('updateCapacitacion', { tema, descripcion, fechaCapacitacion, nombre, capacitacionId })
        .then((resp) => {
          for (let i = 0; i < this.$store.getters.capacitaciones.length; i++) {
            let capacitacion = this.$store.getters.capacitaciones[i]
            if (capacitacion.id === capacitacionId) {
              capacitacion.nombre = nombre
              capacitacion.descripcion = descripcion
              capacitacion.tema = tema
              capacitacion.fechaCapacitacion = fechaCapacitacion
              break
            }
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Capacitacion editada exitosamente.'
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
  props: ['visible', 'capacitacionTema', 'capacitacionDescripcion', 'capacitacionFecha', 'capacitacionCapacitador', 'capacitacionId'],
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
    minDate: {
      get () {
        let oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
        let finalDate = oneWeekAgo.toISOString().substr(0, 10)
        return finalDate
      }
    },
    tema: {
      get () {
        return this.capacitacionTema
      },
      set (value) {
        this.$data.newTema = value
      }
    },
    descripcion: {
      get () {
        return this.capacitacionDescripcion
      },
      set (value) {
        this.$data.newDescripcion = value
      }
    },
    fecha: {
      get () {
        return this.capacitacionFecha
      },
      set (value) {
        this.$data.newDate = value
      }
    },
    capacitador: {
      get () {
        return this.capacitacionCapacitador
      },
      set (value) {
        this.$data.newCapacitador = value
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
