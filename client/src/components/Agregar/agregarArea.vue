<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">Area {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md9 offset-md1>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  label="Nombre"
                  v-model="area.nombre"
                  required
                  :rules="[rules.required, rules.nameMin]"
            ></v-text-field>
            <v-text-field
              label="Actividad"
              v-model="area.actividad"
              required
              :rules="[rules.required, rules.nameMin]"
            ></v-text-field>
            <v-flex xs12 md4 lg4>
                  <v-text-field 
                    label="Seleccione Imagen" 
                    @click='pickFile' 
                    v-model='imageName' 
                    :rules="[rules.required]"
                    prepend-icon='attach_file'
                    >                      
                    </v-text-field>
                  <input
                    class="imagen"
                      type="file"
                      style="display: none"
                      ref="image"
                      accept="image/*"
                      @change="onFilePicked"
                    >
                </v-flex>
            <v-text-field
              label="metros 2 ejemplo(22x02)"
              v-model="area.metros2"
              required
              mask="##x##"
              :rules="[rules.required, rules.nameMin]"
            ></v-text-field>
            <v-text-field
              label="descripción"
              v-model="area.descripcion"
              required
              :rules="[rules.required, rules.nameMin]"
              multi-line
            ></v-text-field>
              </v-form>
              <div ref="CompAreas">
              </div>
              <v-layout row justify-space-between>
                <v-flex md4>
                  <h3>¿Desea agregar puestos?</h3>
                </v-flex>
                <v-flex md4>
                  <v-btn
                    fab
                    small
                    v-if="indice>2"
                    @click.native="removeEstablecimiento"
                  >
                  <v-icon>delete</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    small
                    @click.native="insertarPuesto"
                  >
                  <v-icon>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <br><br>
  </div>
</template>
<script>
import Vue from 'vue'
import agregarPuesto from './agregarPuesto'
export default {
  name: 'agregarArea',
  props: ['index', 'indiceEstablecimiento'],
  data () {
    return {
      indice: 1,
      instanciasPuesto: [],
      imageName: '',
      imageUrl: '',
      imageFile: '',
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras',
        isUrl: v  => {
          let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if (regexp.test(v))
          {
            return true;
          }
          else
          {
            return "Url no válida";
          }
        }
      },
      area: {
        nombre: '',
        actividad: '',
        foto: '',
        metros2: '',
        descripcion: '',
        establecimientoId: ''
      }
    }
  },
  mounted () {
    this.insertarPuesto()
  },
  methods: {
    insertarPuesto () {
      var PuestoClass = Vue.extend(agregarPuesto)
      var instancePuesto = new PuestoClass({
        parent: this,
        propsData: {index: this.indice,
          indiceEstablecimiento: this.indiceEstablecimiento,
          indiceArea: this.index}
      })
      this.indice++
      this.instanciasPuesto.push(instancePuesto)
      instancePuesto.$mount()
      this.$refs.CompAreas.appendChild(instancePuesto.$el)
    },
    removeEstablecimiento () {
      this.indice--
      // Cojo el valor de la última instancia agregada
      var instancePuesto = this.instanciasPuesto.pop()
      // c-elimina
      instancePuesto.$destroy()
      instancePuesto.$el.remove()
      instancePuesto = null
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
    cleaner () {
      this.$refs.form.reset()
      this.instanciasPuesto.forEach(function (puestos) {
        puestos.$destroy()
        puestos.$el.remove()
        puestos = null
      })
    },
    prueba () {
      console.log('\tArea: ' + this.indiceEstablecimiento + '.' + this.index)
      this.instanciasPuesto.forEach(function (puesto) {
        puesto.prueba()
      })
    },
    verify () {
      if (!this.$refs.form.validate()) {
        this.$store.commit('setVerified', false)
      }
      this.instanciasPuesto.forEach(function (puesto) {
        puesto.verify()
      })
    },
    crear (idEstablecimiento) {
      this.area.establecimientoId = idEstablecimiento
      this.agregar()
    },
    agregar () {
      let nombre = this.area.nombre
      let actividad = this.area.actividad
      let metrosCuadrados = this.area.metros2
      let descripcionLugar = this.area.descripcion
      let establecimientosId = Number(this.area.establecimientoId)
      let image = this.imageUrl.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
      return new Promise((resolve, reject) => {
        Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then((resp) => {
            let fotoUrl = resp.body.data.link
            return fotoUrl
          })
          .then((fotoUrl) => {
            Vue.http.post('/api/web/areas', {actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId})
          })        
          .then((resp) => {
            if (resp.body.estado) {
              this.instanciasPuesto.forEach(function (puesto) {
                puesto.crear(resp.body.datos.id)
              })
              return resolve()
            } else {
              this.$store.commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          })
          .catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
    }
  }
}
</script>
