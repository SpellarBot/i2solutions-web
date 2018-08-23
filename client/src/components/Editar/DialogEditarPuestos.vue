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
                :class="'nombrePuesto' + this.puestoId"
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                :class="'descripcionPuesto' + this.puestoId"
                  v-model = "newDescripcion"
                  label="Descripción" required
                  :rules="[rules.required]"
                  multi-line
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field label="Logo" hint="Máximo 10 MB" @click='pickFile' v-model='imageName' prepend-icon='attach_file' :rules="[rules.isImage]"></v-text-field>
                <input
                class="imagen"
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked"
                >
                <p>Nota: Si no sube un nuevo logo, se quedará con la imagen previa</p>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :class="'editPuesto' + this.puestoId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
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
    <v-dialog v-model="loading" persistent max-width="700px">
      <v-card>
        <v-card-text>Editando puesto, por favor espere...</v-card-text>
        <div class="container">
          <svg class="bag" height="100" width="100">
            <circle  cx="50" cy="50" r="40" stroke="white" stroke-width="3" fill="none">
            </circle>
          </svg>
          <svg class="over" height="100" width="100">
            <circle  cx="50" cy="50" r="40" stroke="#2196f3" stroke-width="3" fill="none" >
              <animate attributeType="CSS" attributeName="stroke-dasharray" from="1,254" to="247,56" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </v-card>
    </v-dialog>
  </main>
</template>
<script>
export default {
  data () {
    return {
      //Variables a ser usadas por el componente
      newNombre: '',
      newDescripcion: '',
      valid: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      imageName: '',
      imageUrl: '',
      loading: false,
      imageFile: '',
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres',
        isImage: v => {
          let regexp = /\.(jpg|svg|jpeg|png|bmp|gif)$/
          if (regexp.test(v)) {
            return true
          } else { return 'debe ser una imagen.' }
        }
      }
    }
  },
  props: ['visible', 'puestoNombre', 'puestoDescripcion', 'puestoId', 'areaId', 'editMode', 'puestoUrlFoto'],
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
    emptyImage () {
      this.imageName = ''
      this.imageFile = ''
      this.imageUrl = ''
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    },
    edit () {
      //recibe el nombre, descripcion y foto del puesto. En caso exitoso, edita los datos del puesto seleccionado
      let nombre = this.$data.newNombre
      let descripcion = this.$data.newDescripcion
      let puestoId = this.puestoId
      let areaId = this.areaId
      let fotoUrl = this.imageUrl
      if (this.imageUrl === '') {
        fotoUrl = this.puestoUrlFoto
      }
      this.loading = true
      this.$store.dispatch('updatePuesto', { nombre, descripcion, puestoId, fotoUrl })
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
                    puesto.fotoUrl = fotoUrl
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
          this.loading = false
          this.snackbar = true
          this.mensajeSnackbar = 'Puesto de trabajo editado exitosamente.'
          this.color = 'success'
          this.$emit('close')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = 'Algo ha ocurrido!.'
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
