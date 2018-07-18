<template>
  <main id="DialogEditarPuestos">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Puesto</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "newDescripcion"
                  label="Descripción" required
                  :rules="[rules.required]"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
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
      newNombre: '',
      newDescripcion: '',
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
  props: ['visible', 'puestoNombre', 'puestoDescripcion', 'puestoId', 'areaId', 'editMode'],
  watch: {
    nombre () {
      this.newNombre = this.nombre
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
    editModes: {
      get () {
        return this.editMode
      }
    },
    nombre: {
      get () {
        return this.puestoNombre
      },
      set (value) {
        this.$data.newNombre = value
      }
    },
    descripcion: {
      get () {
        return this.puestoDescripcion
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
      let puestoId = this.puestoId
      let areaId = this.areaId
      console.log(this.editModes)
      this.$store.dispatch('updatePuesto', { nombre, descripcion, puestoId })
        .then((resp) => {
          if (this.editModes === 0) {
            for (let i = 0; i < this.$store.getters.areasPuestos.length; i++) {
              let area = this.$store.getters.areasPuestos[i]
              if (area.id === areaId) {
                for (let j = 0; j < area.puestos.length; j++) {
                  let puesto = area.puestos[j]
                  if (puesto.id === puestoId) {
                    puesto.nombre = nombre
                    puesto.descripcion = descripcion
                    break
                  }
                }
              }
            }
          } else {
            for (let i = 0; i < this.$store.getters.puestos.length; i++) {
              let puesto = this.$store.getters.puestos[i]
              if (puesto.id === puestoId) {
                puesto.nombre = nombre
                puesto.descripcion = descripcion
                break
              }
            }
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Puesto de trabajo editado exitosamente.'
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
