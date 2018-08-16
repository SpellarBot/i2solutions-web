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
                class="nombre"
                  v-model = "newNombre"
                  label="Nombre" required
                  :rules="[rules.required, rules.nameMin, rules.nameMax]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                class="actividadComercial"
                  v-model = "newActividadComercial"
                  label="Actividad Comercial" required
                  :rules="[rules.required]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                class="razonSocial"
                  v-model = "newRazonSocial"
                  label="Razón Social" required
                  :rules="[rules.required]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <img height="150" v-if="imageUrl"/>
          <v-text-field label="Logo" @click='pickFile' v-model='imageName' prepend-icon='attach_file' :rules="[rules.isImage]" readonly></v-text-field>
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
          <v-btn class="editar" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="cargando" persistent max-width="700px">
        <v-card>
        <v-card-text>Editando la empresa, por favor espere...</v-card-text>
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
      imageName: '',
      imageUrl: '',
      imageFile: '',
      cargando: false,
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras',
        nameMax: v => (v && v.length <= 50) || 'Debe tener máximo 50 letras',
        rucMin: v => (v && v.length === 13) || 'Debe tener 13 letras',
        imageMax: v => (v && v.length <= 100) || 'Debe contener maximo 100 letras',
        isUrl: v => {
          let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
          if (regexp.test(v)) {
            return true
          } else {
            return 'Url no válida'
          }
        },
        isImage: v => {
          let regexp = /\.(jpg|svg|jpeg|png|bmp|gif)$/
          if (regexp.test(v)) {
            return true;
          }
          else
            return 'debe ser una imagen.'
        }
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
      let nombre = this.$data.newNombre
      let actividadComercial = this.$data.newActividadComercial
      let razonSocial = this.$data.newRazonSocial
      let empresaId = this.empresaId
      let urlFoto = ''
      let logo = false
      if (this.imageUrl === '') {
        urlFoto = this.empresaUrlFoto
        console.log(urlFoto)
      } else {
        urlFoto = this.imageUrl
        logo = true
      }
      this.cargando = true
      this.$store.dispatch('updateEmpresa', { empresaId, nombre, actividadComercial, razonSocial, urlFoto, logo })
        .then((resp) => {
          this.cargando = false
          console.log('YUP')
          this.$store.getters.empresaSelected.nombre = nombre
          this.$store.getters.empresaSelected.actividadComercial = actividadComercial
          this.$store.getters.empresaSelected.razonSocial = razonSocial
          this.$store.getters.empresaSelected.urlFoto = urlFoto
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa editada exitosamente.'
          this.color = 'success'
          this.$emit('close')
        })
        .catch((err) => {
          if (err.ok === false) {
            this.cargando = false
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = 'No se pudo subir la imagen. Inténtelo de nuevo más tarde.'
          } else {
            this.cargando = false
            this.color = 'error'
            this.snackbar = true
            this.mensajeSnackbar = err
          }
        })
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
svg{

          }
          .over{
              -webkit-animation: rotator 1.5s ease-in-out infinite;
              stroke-dasharray: 107,38;
          }
          .bag{
            position: absolute;
          }
          @-webkit-keyframes rotator {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .container{

                }
</style>
