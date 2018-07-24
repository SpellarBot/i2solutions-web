<template>
  <main id="DialogEditarAreas">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Área</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                :class="'nombreArea' + this.areaId"
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                  maxlength=30
                  :counter=30
                ></v-text-field>
                <v-text-field
                :class="'actividadArea' + this.areaId"
                  v-model = "newActividad"
                  label="Actividad" required
                  :rules="[rules.required]"
                  maxlength=30
                  :counter=30
                ></v-text-field>
                <v-text-field
                :class="'descripcionArea' + this.areaId"
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required]"
                  multi-line
                  maxlength=150
                  :counter=150
                ></v-text-field>
                <v-text-field
                :class="'metrosCuadradosArea' + this.areaId"
                  v-model = "newMetrosCuadrados"
                  label="Metros Cuadrados" required
                  :rules="[rules.required]"
                  hint="ejemplo(22x02)"
                  mask="##x##"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :class="'editArea' + this.areaId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
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
      newNombre: '',
      newActividad: '',
      newMetrosCuadrados: '',
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
  props: ['visible', 'areaNombre', 'areaDescripcion', 'areaActividad', 'areaMetrosCuadrados', 'areaFotoUrl', 'areaId'],
  watch: {
    nombre () {
      this.newNombre = this.nombre
    },
    descripcion () {
      this.newDescripcion = this.descripcion
    },
    actividad () {
      this.newActividad = this.actividad
    },
    metrosCuadrados () {
      this.newMetrosCuadrados = this.metrosCuadrados
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
        return this.areaNombre
      },
      set (value) {
        this.$data.newNombre = value
      }
    },
    descripcion: {
      get () {
        return this.areaDescripcion
      },
      set (value) {
        this.$data.newDescripcion = value
      }
    },
    actividad: {
      get () {
        return this.areaActividad
      },
      set (value) {
        this.$data.newActividad = value
      }
    },
    metrosCuadrados: {
      get () {
        return this.areaMetrosCuadrados
      },
      set (value) {
        this.$data.newMetrosCuadrados = value
      }
    }
  },
  methods: {
    edit () {
      let nombre = this.$data.newNombre
      let descripcionLugar = this.$data.newDescripcion
      let fotoUrl = this.areaFotoUrl
      let actividad = this.$data.newActividad
      let metrosCuadrados = this.$data.newMetrosCuadrados
      let areasId = this.areaId
      this.$store.dispatch('updateArea', { areasId, nombre, actividad, fotoUrl, metrosCuadrados, descripcionLugar })
        .then((resp) => {
          for (let i = 0; i < this.$store.getters.areas.length; i++) {
            let area = this.$store.getters.areas[i]
            if (area.id === areasId) {
              area.areaNombre = nombre
              area.areaActividad = actividad
              area.areaDescripcionLugar = descripcionLugar
              area.areaMetrosCuadrados = metrosCuadrados
              break
            }
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Área editada exitosamente.'
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
