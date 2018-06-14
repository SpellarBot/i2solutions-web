<template>
  <main id='editarArea'>
    <app-navbar></app-navbar>
    <br><br><br>
  <div class="EditaraArea">
    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2 class="titulo">Ingreso datos del Area</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!--nombre inicio-->
          <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg class="contenedor"
          grid-list-md>
            <v-text-field
              v-model="nombre"
              label="Nombre del Area"
              prepend-icon="rowing"
              required
            ></v-text-field>
            <!--Fin-->
            <v-text-field
              v-model="actividad"
              label="Actividad"
              prepend-icon="rowing"
              required
            ></v-text-field>
              <!--Fin-->
            <v-text-field
              v-model="dimension"
              label="Dimensión del Area (30 x 20)"
              prepend-icon="rowing"
              required
            ></v-text-field>
            <v-text-field
              v-model="descripcion"
              label="descripcion"
              prepend-icon="vpn_key"
              required
            ></v-text-field>
            <v-text-field
            v-model="areaId"
            label="area"
            >
            </v-text-field>
            <div>
              <br>
            <!--picture-input
              ref="PictureInput"
              @change="onChange"
              width="600"
              height="600"
              margin="16"
              accept="image/jpeg,image/png"
              size="10"
              :removable="true"
              :customStrings="{
                upload: '<h1>Bummer!</h1>',
                drag: 'Drag a 😺 GIF or GTFO'
              }">
            </picture-input-->
            </div>

        </v-container>
      </v-form>
          <v-btn
            :disabled="!valid"
            @click="editar"
          >
            Editar Area
          </v-btn>
          <v-btn
            @click="limpiar"
          >
            Limpiar
          </v-btn>
        </v-card>
      </v-flex>
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
    </div>
  </main>
</template>

<script>
import router from '../router'
import PictureInput from 'vue-picture-input'
export default {
  data () {
    return {
      valid: true,
      nombre: this.$store.getters.areaSelected.nombre,
      actividad: this.$store.getters.areaSelected.actividad,
      dimension: this.$store.getters.areaSelected.metrosCuadrados,
      descripcion: this.$store.getters.areaSelected.descripcionLugar,
      fotoUrl: this.$store.getters.areaSelected.fotoUrl,
      areaId: this.$store.getters.areaSelected.id,
      color: '',
      snackbar: false
    }
  },
  Componetns: {
    PictureInput
  },
  methods: {
    limpiar () {
      this.$refs.form.reset()
    },
    onChange (image) {
      console.log('Nueva Imagen seleccionada!')
      if (image) {
        console.log('Imagen Cargada')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    editar () {
      // if(this.$refs.form.validate()) {
      let nombre = this.$data.nombre
      let actividad = this.$data.actividad
      let metrosCuadrados = this.$data.dimension
      let descripcionLugar = this.$data.descripcion
      let fotoUrl = this.$data.fotoUrl
      let areasId = this.$data.areaId
      this.$store.dispatch('updateArea', { areasId, nombre, actividad, fotoUrl, metrosCuadrados, descripcionLugar })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Area editada exitosamente.'
          this.color = 'success'
          this.$store.dispatch('getAreas')
            .then((resp) => {
              router.push('areas')
            })
            .catch((err) => {
              this.color = 'error'
              this.snackbar = true
              this.mensajeSnackbar = err
            })
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
      // }
    },
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageLogo {
  background-color: #1394CE;
  padding: 10px;
  margin-bottom: 30px;
  text-align: left !important;
}
.i2s-name {
  text-align: left !important;
  padding: 20px;
  color: white;
  font-size: 40px;
}

.titulo{
  color:blue;
}
.contenedor{
  padding-left: 3%;
}
v-text-field{
  padding: 10px;
}
</style>
