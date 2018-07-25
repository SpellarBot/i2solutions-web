<template>
  <main id="DialogEditarEquipos">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Equipo</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                :class="'nombreEquipo' + this.equipoId"
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                  maxlength=30
                  :counter=30
                ></v-text-field>
                <v-text-field
                :class="'descripcionEquipo' + this.equipoId"
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                :class="'cantidadEquipo' + this.equipoId"
                  v-model = "newCantidad"
                  label="Cantidad" required
                  :rules="[rules.required]"
                  mask="###"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :class="'editEquipo' + this.equipoId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
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
      newDescripcion: '',
      newCantidad: '',
      newNombre: '',
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
  props: ['visible', 'equipoNombre', 'equipoCantidad', 'equipoId', 'equipoDescripcion', 'equipoFotoUrl'],
  watch: {
    nombre () {
      this.newNombre = this.nombre
    },
    cantidad () {
      this.newCantidad = this.cantidad
    },
    descripcion () {
      this.newDescripcion = this.descripcion
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
    nombre: {
      get () {
        return this.equipoNombre
      },
      set (value) {
        this.$data.newNombre = value
      }
    },
    cantidad: {
      get () {
        return this.equipoCantidad
      },
      set (value) {
        this.$data.newCantidad = value
      }
    },
    descripcion: {
      get () {
        return this.equipoDescripcion
      },
      set (value) {
        this.$data.newDescripcion = value
      }
    }
  },
  methods: {
    edit () {
      let nombre = this.$data.newNombre
      let descripcion = this.$data.newDescripcion
      let fotoUrl = this.equipoFotoUrl
      let cantidad = Number(this.$data.newCantidad)
      let equiposId = this.equipoId
      this.$store.dispatch('updateEquipos', { nombre, descripcion, fotoUrl, cantidad, equiposId })
        .then((resp) => {
          for (let i = 0; i < this.$store.getters.equipoAreas.length; i++) {
            let equipo = this.$store.getters.equipoAreas[i]
            if (equipo.id === equiposId) {
              equipo.descripcion = descripcion
              equipo.cantidad = cantidad
              break
            }
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Equipo editado exitosamente.'
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
