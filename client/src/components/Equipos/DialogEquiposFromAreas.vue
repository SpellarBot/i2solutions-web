<template>
  <main id="DialogEquiposFromAreas">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="show = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Equipos Por Area</v-toolbar-title>
      </v-toolbar>
      <br>
      <v-layout>
      <v-flex xs12>
        <v-card>
            <h1> Area: </h1>
            <h2> {{this.nombre}}</h2>
          <v-container  fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(equipo,index) in this.$store.getters.equipoAreas"
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
                    fab
                    dark
                    small
                    color="blue"
                    @click="visualizarEditar(equipo)"
                  >
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    dark
                    small
                    color="blue"
                    @click="eliminarEquipo(equipo, index)"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <h3><b>Descripcion: </b>{{equipo.descripcion}}</h3>
                  <h3><b>Cantidad: </b>{{equipo.cantidad}}</h3>
                  <h3><b>Puesto: </b>{{equipo.puestosNombre}}</h3>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
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
    <!--Para Eliminar Equipos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogEquipo" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este Equipo?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogEquipo = false">No</v-btn>
            <v-btn color="blue darken-1" flat @click = "borrarEquipo()">Sí</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <footer>
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
  name: 'DialogEquiposFromAreas',
  props: ['visible', 'nombre', 'areaId'],
  /* mounted () {
  }, */
  data () {
    return {
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
    }
  },
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      this.verEquiposFromAreas()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verEquiposFromAreas () {
      let areasId = this.areaId
      this.$store.dispatch('getEquiposFromAreas', areasId)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
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
      this.eliminarDialogEquipo = true
      this.indice = indice
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
          console.log('Si borre con exito')
          this.color = 'success'
          this.quitarDeArray()
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    quitarDeArray () {
      this.$store.getters.equipoAreas.splice(this.indice, 1)
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
