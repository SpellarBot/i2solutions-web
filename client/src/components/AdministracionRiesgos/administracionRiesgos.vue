<template>
  <main id="administracionRiesgos">
    <app-navbar></app-navbar>
    <br>
    <h1>Administración de Riesgos</h1>
    <br>
    <v-container>
      <v-card>
      <h2>Riesgos: </h2>
      <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="visibleAgregar = true">Agregar Riesgo</v-btn>
      <v-layout align-center justify-center row>
      <v-data-table
      :headers="headers"
      :items="riesgos"
      rows-per-page-text="Filas por página"
      class="elevation-1"
      :rows-per-page-items="[10,20,30,60]"
      >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.clasificacion }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="justify-center layout px-0">
          <v-btn flat
          icon
            small
            @click="eliminarRiesgo(props.item)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
          </td>
        </template>
        <template slot="expand" slot-scope="props">
          <v-card flat>
            <v-card-text class="text-xs pa-0"><b>Descripción:</b> {{ props.item.descripcion }}</v-card-text>
          </v-card>
        </template>
      </v-data-table>
    </v-layout>
    </v-card>
    </v-container>
<footer>
      <v-layout row justify-center>
        <v-dialog v-model="visibleAgregar" @keydown.esc="visibleAgregar=false" persistent max-width="600px">
          <v-card>
        <v-card-title>
          <span class="headline">Nuevo Riesgo</span>
        </v-card-title>
        <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-select
                :items="clasificaciones"
                v-model="newClasificacion"
                label="Clasificación"
                required
                :rules="[rules.required]"
                ></v-select>
                <v-text-field
                  v-model = "newDescripcion"
                  label="Descripcion" required
                  :rules="[rules.required, rules.min]"
                  maxlength=150
                  minlength=2
                  counter=150
                  multi-line
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" :disabled="!valid" @click="crear()">Crear</v-btn>
          <v-btn color="blue darken-1" flat @click.native="visibleAgregar = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
      </v-layout>
            <v-layout row justify-center>
            <v-dialog v-model="eliminarDialogRiesgos" persistent max-width="290">
              <v-card>
                <v-card-title class="headline">Eliminar</v-card-title>
                <v-card-text>¿Está seguro que quiere eliminar este Riesgo?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click = "borrarRiesgo()">Sí</v-btn>
                  <v-btn color="blue" flat @click.native="eliminarDialogRiesgos = false">No</v-btn>
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
          </footer>
  </main>
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      color: '',
      snackbar: false,
      mensajeSnackbar: '',
      eliminarDialogRiesgos: false,
      indexEliminar: 0,
      riesgos: [],
      riesgoSelected: null,
      visibleAgregar: false,
      newClasificacion: '',
      newDescripcion: '',
      clasificaciones: [{
        value: 'Biológico',
        text: 'Biológico'
      },
      {
        value: 'Físico',
        text: 'Físico'
      },
      {
        value: 'Químico',
        text: 'Químico'
      },
      {
        value: 'Psicosocial',
        text: 'Psicosocial'
      },
      {
        value: 'Biomecánico',
        text: 'Biomecánico'
      },
      {
        value: 'Condiciones de seguridad',
        text: 'Condiciones de seguridad'
      },
      {
        value: 'Fenómenos naturales',
        text: 'Fenómenos naturales'
      }
      ],
      rules: {
        max: v => (!Number.isNaN(parseInt(v)) && (Number(v) <= 50)) || 'Debe ser un número y menor o igual a 50',
        required: (value) => !!value || 'Campo Requerido.',
        min: (v) => v.length >= 2 || 'Mímimo se requieres 2 letras',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      },
      headers: [
        { text: 'Clasificación', value: 'clasificación', sortable: false },
        { text: 'Descripción', value: 'descripcion', sortable: false },
        { text: 'Acciones', value: 'name', sortable: false }
      ]
    }
  },
  mounted () {
    this.cargarData()
  },
  methods: {
    crear () {
      let clasificacion = this.$data.newClasificacion
      let descripcion = this.$data.newDescripcion
      this.$store.dispatch('crearRiesgo', { clasificacion, descripcion })
        .then((resp) => {
          console.log('Here')
          let id = this.$store.getters.riesgoCreado.id
          console.log(id)
          let riesgo = { id, clasificacion, descripcion }
          this.riesgos.push(riesgo)
          this.reiniciar()
          this.snackbar = true
          this.mensajeSnackbar = 'Riesgo creado exitosamente.'
          this.color = 'success'
          this.$store.dispatch('emptyRiesgoCreado')
          this.visibleAgregar = false
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    borrarRiesgo () {
      this.eliminarDialogRiesgos = false
      let riesgosId = Number(this.riesgoSelected)
      this.$store.dispatch('deleteRiesgo', riesgosId)
        .then((resp) => {
          console.log('entre')
          this.riesgos.splice(this.indexEliminar, 1)
          this.mensajeSnackbar = 'Riesgo borrado con exito.'
          this.snackbar = true
          this.color = 'success'
        })
        .catch((err) => {
          this.color = 'error'
          console.log(err)
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    cargarData () {
      this.riesgos = this.$store.getters.riesgos
    },
    eliminarRiesgo (riesgo) {
      this.indexEliminar = this.riesgos.indexOf(riesgo)
      this.riesgoSelected = riesgo.id
      this.eliminarDialogRiesgos = true
    },
    reiniciar () {
      this.$data.valid = false
      this.$refs.form.reset()
    }
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
