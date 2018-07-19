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
                v-for="equipo in this.$store.getters.equipoAreas"
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
                    @click="eliminarEquipo(equipo)"
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
      </v-flex>
    </v-layout>
    </v-card>
    </v-dialog>

    <!--Para Eliminar Equipos-->
    <v-layout row justify-center>
      <v-dialog v-model="eliminarDialogEquipo" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Eliminar</v-card-title>
          <v-card-text>¿Está seguro que quiere eliminar este Puesto?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" flat @click.native="eliminarDialogEquipo = false">No</v-btn>
            <v-btn color="blue darken-1" flat @click = "borrarEquipo()">Sí</v-btn>
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
      eliminarDialogEquipo: false
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
    cargarData () {
      this.valid = null
      this.loading = true
      this.verEquiposFromPuestos()
      this.loading = false
      this.valid = true
      console.log('LOG')
    },
    verEquiposFromPuestos () {
      let puestosId = this.puestoId
      this.$store.dispatch('getEquiposFromPuestos', puestosId)
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

    eliminarEquipo (equipo) {
      this.equipoId = equipo.id
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
          console.log ('Si borre con exito')
          this.color = 'success'
          // this.reloadEstablecimiento()
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
