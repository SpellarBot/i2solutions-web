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
                  :rules="[rules.required, rules.min]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                :class="'descripcionEquipo' + this.equipoId"
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required, rules.min]"
                  maxlength=50
                  :counter=50
                ></v-text-field>
                <v-text-field
                :class="'cantidadEquipo' + this.equipoId"
                  v-model = "newCantidad"
                  label="Cantidad" required
                  :rules="[rules.required, rules.maxCant, rules.max]"
                  maxlength=3
                  :counter=3
                  mask="###"
                ></v-text-field>
                <img :src="imageUrl" height="150" v-if="imageUrl"/>
                <v-btn v-if="imageUrl"
                @click="emptyImage"
                fab
                dark
                small
                color="blue"
                >
                <v-icon>delete</v-icon>
              </v-btn>
          <v-text-field label="Imagen" hint="Máximo 10 MB" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
          <input
          class="imagen"
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >
          <p>Nota: Si no sube una nueva imagen, se quedará con la imagen previa</p>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :class="'editEquipo' + this.equipoId" color="blue darken-1" flat :disabled="!valid" @click = "edit ()">Editar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="cargando" persistent max-width="700px">
        <v-card>
        <v-card-text>Editando el equipo, por favor espere...</v-card-text>
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
  data () {
    return {
      imageName: '',
      imageUrl: '',
      imageFile: '',
      cargando: false,
      newDescripcion: '',
      newCantidad: '',
      newNombre: '',
      valid: false,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        max: v => (!Number.isNaN(parseInt(v)) && (Number(v) <= 150)) || 'Debe ser un número y menor o igual a 150',
        min: (v) => v.length >= 2 || 'Mímimo se requieres 2 letras',
        maxCant: v => (!Number.isNaN(parseInt(v)) && (Number(v) >= 1)) || 'Debe ser un número mayor o igual a 1',
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
      let descripcion = this.$data.newDescripcion
      let cantidad = Number(this.$data.newCantidad)
      let equiposId = this.equipoId
      let fotoUrl = ''
      let logo = false
      if (this.imageUrl === '') {
        fotoUrl = this.equipoFotoUrl
        console.log(fotoUrl)
      } else {
        fotoUrl = this.imageUrl
        logo = true
      }
      this.cargando = true
      this.$store.dispatch('updateEquipos', { nombre, descripcion, fotoUrl, cantidad, equiposId, logo })
        .then((resp) => {
          this.cargando = false
          for (let i = 0; i < this.$store.getters.equipoAreas.length; i++) {
            let equipo = this.$store.getters.equipoAreas[i]
            if (equipo.id === equiposId) {
              equipo.nombre = nombre
              equipo.descripcion = descripcion
              equipo.cantidad = cantidad
              equipo.fotoUrl = fotoUrl
              break
            }
          }
          this.snackbar = true
          this.mensajeSnackbar = 'Equipo editado exitosamente.'
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
</style>
