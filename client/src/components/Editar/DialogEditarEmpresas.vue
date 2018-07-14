<template>
  <main id="DialogEditarEmpresas">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Empresa</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "newActividadComercial"
                  label="Actividad Comercial" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "newRazonSocial"
                  label="Razón Social" required
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
  props: ['visible', 'empresaId', 'empresaNombre', 'empresaActividadComercial', 'empresaRazonSocial', 'empresaUrlFoto'],
  data () {
    return {
      valid: false,
      newNombre: '',
      newActividadComercial: '',
      newRazonSocial: '',
      newUrlFoto: '',
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
    nombre () {
      this.newNombre = this.nombre
    },
    actividadComercial () {
      this.newActividadComercial = this.actividadComercial
    },
    razonSocial () {
      this.newRazonSocial = this.razonSocial
    },
    urlFoto () {
      this.newUrlFoto = this.urlFoto
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
        // this.$data.newNombre = this.empresaNombre
        return this.empresaNombre
      },
      set (value) {
        this.$data.newNombre = value
      }
    },
    actividadComercial: {
      get () {
        // this.$data.newActividadComercial = this.empresaActividadComercial
        return this.empresaActividadComercial
      },
      set (value) {
        this.$data.newActividadComercial = value
      }
    },
    razonSocial: {
      get () {
        // this.$data.newRazonSocial = this.empresaRazonSocial
        return this.empresaRazonSocial
      },
      set (value) {
        this.$data.newRazonSocial = value
      }
    }
  },
  methods: {
    edit () {
      let nombre = this.$data.newNombre
      let actividadComercial = this.$data.newActividadComercial
      let razonSocial = this.$data.newRazonSocial
      let empresaId = this.empresaId
      let urlFoto = this.empresaUrlFoto
      console.log(urlFoto)
      this.$store.dispatch('updateEmpresa', { empresaId, nombre, actividadComercial, razonSocial, urlFoto })
        .then((resp) => {
          this.$store.getters.empresaSelected.nombre = nombre
          this.$store.getters.empresaSelected.actividadComercial = actividadComercial
          this.$store.getters.empresaSelected.razonSocial = razonSocial
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa editada exitosamente.'
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
