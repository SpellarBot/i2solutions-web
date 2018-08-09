<template>
  <main id="DialogEquiposFromPuestos">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Equipos Por Puestos</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h1> Puesto: </h1>
            <h2> {{this.puesto}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(equipo, index) in this.$store.getters.equipoAreas"
                :key="equipo.id"
                xs3 lg4>
                <v-card style="padding:5px; margin:25px;" >
                  <div><h3><b>Equipo: </b>{{equipo.nombre}}</h3></div>
                  <v-card-media
                    :src=equipo.fotoUrl
                    height="200px"
                    width="120px"
                    contain
                  >
                  </v-card-media>
                  <v-btn
                  :class="'editarEquipo' + equipo.id"
                    fab
                    dark
                    small
                    color="blue"
                    @click="visualizarEditar(equipo)"
                    v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
                  >
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn
                  :class="'eliminarEquipos' + equipo.id"
                    fab
                    dark
                    small
                    color="blue"
                    @click="eliminarEquipo(equipo, index)"
                    v-if="$store.getters.usuario.rol === 'admin-i2solutions' || $store.getters.usuario.rol === 'admin-empresa'"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <h3><b>Descripcion: </b>{{equipo.descripcion}}</h3>
                  <h3><b>Cantidad: </b>{{equipo.cantidad}}</h3>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-btn
        top
        right
        relative
        fab
        @click="visibleAgregar = true"
        >
        <v-icon>add</v-icon>
      </v-btn>
      </v-flex>
    </v-layout>
    </v-card>
    </v-dialog>

    <!--Para Eliminar Equipos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogEquipo" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este Equipo?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :class="'borrarEquipo' + this.equipoId" color="blue darken-1" flat @click = "borrarEquipo()">Sí</v-btn>
            <v-btn color="blue" flat @click.native="eliminarDialogEquipo = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
    <footer>
      <v-layout row justify-center>
        <v-dialog v-model="visibleAgregar" @keydown.esc="visibleAgregar=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nuevo Equipo</span>
        </v-card-title>
        <v-card-text>
              <v-form ref="form" v-model="valid">
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
          <v-text-field maxlength=100 label="Imagen" hint="Máximo 10 MB" :rules="[rules.required]" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
          <input
          class="imagen"
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :class="'editEquipo' + this.equipoId" color="blue darken-1" flat :disabled="!valid" @click = "crear ()">Crear</v-btn>
          <v-btn color="blue darken-1" flat @click.native="visibleAgregar = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="cargando" persistent max-width="700px">
        <v-card>
        <v-card-text>Creando el equipo, por favor espere...</v-card-text>
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
      </v-layout>
      <DialogEditarEquipos
      :visible="visibleEdicion"
      :equipoId="equipoId"
      :equipoNombre="equipoNombre"
      :equipoFotoUrl="equipoFotoUrl"
      :equipoDescripcion="equipoDescripcion"
      :equipoCantidad="equipoCantidad"
      @close="visibleEdicion=false">
    </DialogEditarEquipos>
    </footer>
  </main>
</template>
<script>
import DialogEditarEquipos from '../Editar/DialogEditarEquipos'
export default {
  components: { DialogEditarEquipos },
  name: 'DialogEquiposFromPuestos',
  props: ['visible', 'puestoId', 'puestoNombre'],
  /* mounted () {
  }, */
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
      visibleAgregar: false,
      size: 'sm',
      equipoId: '',
      equipoNombre: '',
      equipoDescripcion: '',
      equipoFotoUrl: '',
      equipoCantidad: '',
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      visibleEdicion: false,
      eliminarDialogEquipo: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        max: v => (!Number.isNaN(parseInt(v)) && (Number(v) <= 150)) || 'Debe ser un número y menor o igual a 150',
        min: (v) => v.length >= 2 || 'Mímimo se requieres 2 letras',
        maxCant: v => (!Number.isNaN(parseInt(v)) && (Number(v) >= 1)) || 'Debe ser un número mayor o igual a 1',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      },
      indice: -1
    }
  },
  watch: {
    show () {
      this.cargarData()
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
    puestosId: {
      get () {
        return this.puestoId
      }
    },
    puesto: {
      get () {
        return this.puestoNombre
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
    crear () {
      let nombre = this.$data.newNombre
      let descripcion = this.$data.newDescripcion
      let cantidad = Number(this.$data.newCantidad)
      let fotoUrl = ''
      let logo = false
      if (this.imageUrl === '') {
        fotoUrl = this.equipoFotoUrl
        console.log(fotoUrl)
      } else {
        fotoUrl = this.imageUrl
        logo = true
      }
      let puestosId = this.puestoId
      this.cargando = true
      this.$store.dispatch('crearEquipos', { nombre, descripcion, fotoUrl, cantidad, puestosId, logo })
        .then((resp) => {
          let equipo = this.$store.getters.equipoCreado
          this.$store.getters.equipoAreas.push(equipo)
          this.cargando = false
          this.snackbar = true
          this.mensajeSnackbar = 'Equipo creado exitosamente.'
          this.color = 'success'
          this.reiniciar()
          this.visibleAgregar = false
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
    },
    reiniciar () {
      this.$data.valid = false
      this.$refs.form.reset()
    },
    cargarData () {
      this.loading = true
      // this.verEquiposFromPuestos()
      this.loading = false
      console.log('LOG')
    },
    visualizarEditar (equipo) {
      this.equipoNombre = equipo.nombre
      this.equipoId = equipo.id
      this.equipoDescripcion = equipo.descripcion
      this.equipoFotoUrl = equipo.fotoUrl
      this.equipoCantidad = equipo.cantidad
      this.visibleEdicion = true
    },

    eliminarEquipo (equipo, indice) {
      this.equipoId = equipo.id
      console.log(this.equipoId)
      this.indice = indice
      this.eliminarDialogEquipo = true
    },
    borrarEquipo () {
      this.eliminarDialogEquipo = false
      let equiposId = Number(this.equipoId)
      console.log('idPuesto', equiposId)
      this.$store.dispatch('deleteEquipo', equiposId)
        .then((resp) => {
          console.log('entre')
          this.snackbar = true
          this.mensajeSnackbar = 'Equipo borrada con exito.'
          this.color = 'success'
          this.$store.getters.equipoAreas.splice(this.indice, 1)
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
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
