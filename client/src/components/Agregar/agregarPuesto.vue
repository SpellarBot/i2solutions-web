<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">Puestos {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md8 offset-md1>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  label="Nombre"
                  v-model="nombre"
                  required
                  :rules="[rules.required, rules.nameMin]"
                >
            </v-text-field>
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
            <v-text-field
                  label="Descripción"
                  v-model="descripcion"
                  required
                  :rules="[rules.required, rules.nameMin]"
                  multi-line
            >
            </v-text-field>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <br><br>
  </div>
</template>
<script>
import Vue from 'vue'
// import Vue from 'vue'
export default {
  name: 'agregarPuesto',
  props: ['index', 'indiceArea'],
  data () {
    return {
      indice: 1,
      nombre: '',
      imageName: '',
      imageUrl: '',
      imageFile: '',
      descripcion: '',
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras',
      }
    }
  },
  methods: {
    verify () {
      if (!this.$refs.form.validate()) {
        this.$store.commit('setVerified', false)
        return false
      }
      return true
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
    crear (areaId) {
      let nombre = this.nombre
      let descripcion = this.descripcion
      let areasId = Number(areaId)
      let image = this.imageUrl.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
      return new Promise((resolve, reject) => {
        Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then(async (resp) => {
            let fotoUrl = resp.body.data.link
            return fotoUrl
          })
          .then((fotoUrl) => {
            return Vue.http.post('/api/web/puestos', {nombre, descripcion, fotoUrl, areasId})
          })
          .then((resp) => {
            if (resp.body.estado) {
              return resolve()
            } else {
              this.$store.commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
    }
  }
}
</script>
