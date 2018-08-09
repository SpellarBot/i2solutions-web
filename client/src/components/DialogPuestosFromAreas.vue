<template>
  <main id="DialogPuestosFromAreas">
    <template v-if="loading">
      <div class="text-xs-center">
    <v-progress-circular
      indeterminate
    ></v-progress-circular>
  </div>
    </template>
    <template class="content" v-if="valid">
    <v-dialog fullscreen v-model="show" hide-overlay transition="dialog-bottom-transition">
      <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="closing()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Área {{ this.areaNombre }}</v-toolbar-title>
      </v-toolbar>
      <h1>Puestos de trabajo</h1>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4 v-for="(puesto,index) in this.$store.getters.puestos" :key="puesto.id">
            <CardPuestos
            :puesto = "puesto"
            :areaId = "idArea"
            :editMode = "editMode"
            :deleteMode = "deleteMode"
            :index = index
            ></CardPuestos>
          </v-flex>
        </v-layout>
        <v-btn
            fab
            @click.native="showPuesto=true"
            class = "bottom-right-corner"
          >
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>
    </v-card>
    <v-dialog v-model="showPuesto" width="550px" @keydown.esc="showPuesto=false">
        <v-card>
          <v-card-title>
            <h3>Agregar puesto</h3>          
          </v-card-title>
          <agregarPuesto
              :index="1"
              :indiceArea="idArea"
              ref="puesto"
            >
            </agregarPuesto>
            <v-card-actions>
              <v-btn color="blue" flat @click.native="agregar()">Crear</v-btn>
              <v-btn flat @click.native="showPuesto=false">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="showMessage" width="450px">
        <v-card>
          <v-card-title>
            {{message.title}}
          </v-card-title>
          <v-card-text>
            {{message.text}}
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue" flat @click.native="showPuesto=false; showMessage=false; cargarData()">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="loading" persistent max-width="700px">
        <v-card>
          <v-card-text>Creando el puesto, por favor espere...</v-card-text>
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
    </v-dialog>
  </template>
  </main>
</template>
<script>
import CardPuestos from './CardPuestos'
import agregarPuesto from './Agregar/agregarPuesto'
export default {
  components: { CardPuestos, agregarPuesto },
  data () {
    return {
      loading: false,
      valid: null,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      editMode: 1,
      deleteMode: 1,
      showPuesto: false,
      showMessage: false,
      message: {
        title: '¡éxito!',
        text: 'El puesto ha sido agregado con éxito'
      }
    }
  },
  /* mounted () {
    this.cargarData()
  }, */
  methods: {
    cargarData () {
      this.valid = null
      this.loading = true
      this.verAreasPuestos()
      this.loading = false
      this.valid = true
    },
    agregar () {
      //En caso de que no tenga problemas al crear esto.
      if (this.$refs.puesto.verify()) {
        this.loading = true
        return new Promise((resolve, reject) => {
          this.$refs.puesto.crear(this.areaId)
          .then((resp) => {
            this.loading = false
            this.showMessage = true;            
            return resolve()
          })
          .catch((err) => {
            this.loading = false
            this.message.title = '¡oh no!'
            this.message.text = 'Algo ha salido mal'
            return reject()
          })
        })
      }
    },
    closing () {
      this.$store.dispatch('emptyPuestos')
      this.show = false
    },
    verAreasPuestos () {
      this.$store.dispatch('getPuestosFromEstablecimiento', this.establecimientoId)
        .then((resp) => {
          console.log('Done')
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    }
  },
  name: 'DialogPuestosFromAreas',
  watch: {
    show () {
      this.cargarData()
    }
  },
  props: ['visible', 'areaId', 'areaNombre'],
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
    idArea: {
      get () {
        return this.areaId
      }
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
.bottom-right-corner {
  position: absolute;
  right:    0;
  bottom:   0;
  margin-right: 3%;
  margin-bottom: 2%;
}
</style>
