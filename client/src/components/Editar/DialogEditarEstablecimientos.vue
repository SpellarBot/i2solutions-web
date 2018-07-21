<template>
  <main id="DialogEditarEstablecimientos">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Establecimiento</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                class="nombres"
                  v-model = "newNombres"
                  label="Nombre" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                class="direccion"
                  v-model = "newDireccion"
                  label="Direccion" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                class="ruc"
                  v-model = "newRUC"
                  label="RUC" required
                  :rules="[rules.required, rules.RUC]"
                  mask="#############"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
          <v-btn class="editarEstablecimiento" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
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
import MyModule from '../MyModule.js'
export default {
  props: ['visible', 'empresaId', 'establecimientoId', 'establecimientoNombres', 'establecimientoDireccion', 'establecimientoRUC'],
  data () {
    return {
      valid: false,
      newNombres: '',
      newDireccion: '',
      newRUC: '',
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },

  watch: {
    nombres () {
      this.newNombres = this.nombres
    },
    direccion () {
      this.newDireccion = this.direccion
    },
    ruc () {
      this.newRUC = this.ruc
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
    nombres: {
      get () {
        // this.$data.newNombre = this.empresaNombre
        return this.establecimientoNombres
      },
      set (value) {
        this.$data.newNombres = value
      }
    },
    direccion: {
      get () {
        // this.$data.newActividadComercial = this.empresaActividadComercial
        return this.establecimientoDireccion
      },
      set (value) {
        this.$data.newDireccion = value
      }
    },
    ruc: {
      get () {
        // this.$data.newRazonSocial = this.empresaRazonSocial
        return this.establecimientoRUC
      },
      set (value) {
        this.$data.newRUC = value
      }
    }
  },
  methods: {
    edit () {
      let nombres = this.$data.newNombres
      let direccion = this.$data.newDireccion
      let ruc = this.$data.newRUC
      let empresasId = this.empresaId
      let establecimientoId = this.establecimientoId
      let validacionRuc = MyModule(ruc)
      if (validacionRuc[0] === false) {
        this.snackbar = true
        this.mensajeSnackbar = validacionRuc[1]
        this.color = 'error'
      } else {
        console.log(empresasId)
        this.$store.dispatch('updateEstablecimiento', { nombres, direccion, ruc, empresasId, establecimientoId })
          .then((resp) => {
            for (let i = 0; i < this.$store.getters.establecimientos.length; i++) {
              let establecimiento = this.$store.getters.establecimientos[i]
              if (establecimiento.id === establecimientoId) {
                establecimiento.nombres = nombres
                establecimiento.direccion = direccion
                establecimiento.ruc = ruc
                break
              }
            }
            this.snackbar = true
            this.mensajeSnackbar = 'Establecimiento editado exitosamente.'
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
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
