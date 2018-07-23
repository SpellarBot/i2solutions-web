<template>
  <main id="agregarEmpresa">
    <v-dialog fullscreen v-model="show" @keydown.esc="confirm.open=true" hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="confirm.open=true">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Agregar nueva empresa</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md12>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-flex xs12 md6 lg4>
                  <v-text-field
                    label="Nombre"
                    v-model="empresa.nombre"
                    required
                    :rules="[rules.required, rules.nameMin]"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg4>
                  <v-text-field
                    label="Actividad Comercial"
                    v-model="empresa.actividad"
                    required
                    :rules="[rules.required, rules.nameMin]"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg4>
                  <img :src="imageUrl" height="150" v-if="imageUrl"/>
                </v-flex>
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
                <v-flex md12>
                    <v-text-field
                      class="razon"
                      v-model="empresa.razon"
                      label="Razon Social"
                      required
                      :rules="[rules.required, rules.nameMin]"
                    ></v-text-field>
                </v-flex>
                  <v-text-field
                  class="direccion"
                    label="Dirección"
                    v-model="empresa.direccion"
                    required
                    :rules="[rules.required, rules.nameMin]"
                  ></v-text-field>
                  <v-text-field
                  class="ruc"
                    label="RUC"
                    v-model="empresa.RUC"
                    required
                    mask="#############"
                    :rules="[rules.RUCvalidate, rules.required, rules.rucMin]"
                    :counter="13"
                  ></v-text-field>
              </v-form>
              <br><br>
              <v-layout row align-center>
                <v-flex md9 offset-md1>
                  <div ref="areas">
                  </div>
                  <v-layout row justify-space-between>
                    <v-flex md4>
                      <h3>¿Desea agregar Areas?</h3>
                    </v-flex>
                    <v-flex md4>
                      <v-btn
                        fab
                        small
                        @click.native="removeArea()"
                        v-if="indiceArea>2"
                      >
                      <v-icon>delete</v-icon>
                      </v-btn>
                      <v-btn
                        fab
                        small
                        @click.native="insertarArea()"
                      >
                      <v-icon>add</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>              
              <v-layout row align-center>
                <v-flex md10>
                  <div ref="establecimientos">
                  </div>
                </v-flex>
              </v-layout>
              <v-layout row justify-space-between>
                <v-flex md4>
                  <h3>¿Desea agregar establecimientos?</h3>
                </v-flex>
                <v-flex md4>
                  <v-btn
                    fab
                    small
                    @click.native="removeEstablecimiento()"
                    v-if="indice>2"
                  >
                  <v-icon>delete</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    small
                    @click.native="insertarEstablecimiento()"
                  >
                  <v-icon>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-btn @click.native="guardar()" :disabled="!valid">submit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <footer>
      <v-dialog v-model="confirm.open" max-width="500px" @keydown.esc="confirm.open=false">
      <v-card>
        <v-card-title>
          <span class="headline">¿Está seguro que quiere salir?</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <span>
            Se borrarán todos los datos que haya ingresado
          </span>
        </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="cleaner(); show=false; confirm.open=false; indice=1;">Sí</v-btn>
            <v-btn color="primary" flat @click.stop="confirm.open=false">No</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="created" max-width="500px" @keydown.esc="cleaner(); show=false; created=false; insertarArea(); indice=1;">
      <v-card>
        <v-card-title>
          <span class="headline">¡La empresa ha sido creada con éxito!</span>
        </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="cleaner(); show=false; created=false; insertarArea(); indice=1; loading=false">Ok</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="error.trigger" max-width="500px" @keydown.esc="error.trigger=false; loading=false">
      <v-card>
        <v-card-title>
          <span class="headline">¡Algo ha salido mal!</span>
        </v-card-title>
        <v-card-text>
          {{error.message}}
        </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="error.trigger=false; loading=false">Ok</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="loading" persistent max-width="700px">
      <v-card>
        <v-card-text>Creando la empresa, por favor espere...</v-card-text>
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
    </footer>
  </main>
</template>
<script>
import Vue from 'vue'
import agregarEstablecimiento from './agregarEstablecimiento'
import agregarArea from './agregarArea'
import MyModule from '../MyModule.js'
export default {
  name: 'agregarEmpresa',
  props: ['visible'],
  components: {
    agregarEstablecimiento,
    agregarArea
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
  mounted () {
    this.insertarArea()
  },
  methods: {
    insertarEstablecimiento () {
      //  Lo que queremos hacer aquí es crear una nueva clase para que luego pueda ser referenciado
      //  Vue.extend me permite crear una clase a partir de un componente
      var EstablecimientoClass = Vue.extend(agregarEstablecimiento)
      //  Creado la clase puedo hacer una instancia de la misma.
      var instanceEstablecimiento = new EstablecimientoClass({
        //  Aquí van colocado los props que pida el componente
        parent: this,
        propsData: {index: this.indice}
      })
      //  Simple nombre.
      this.indice++
      // Agrego la instancia a un arreglo de instancias para luego poder eliminarlo.
      this.instanciasEstablecimientos.push(instanceEstablecimiento)
      //  Agrego la instancia al DOM de la página dado el ref "establecimientos". Colocado en un <div>
      instanceEstablecimiento.$mount()
      this.$refs.establecimientos.appendChild(instanceEstablecimiento.$el)
    },
    insertarArea () {
      var AreaClass = Vue.extend(agregarArea)
      var instanceArea = new AreaClass({
        parent: this,
        propsData: {index: this.indiceArea}
      })
      this.indiceArea++
      this.instanciasAreas.push(instanceArea)
      instanceArea.$mount()
      this.$refs.areas.appendChild(instanceArea.$el)
    },
    removeEstablecimiento () {
      this.indice--
      // Cojo el valor de la última instancia agregada
      var instanceEstablecimiento = this.instanciasEstablecimientos.pop()
      // c-elimina
      instanceEstablecimiento.$destroy()
      instanceEstablecimiento.$el.remove()
      instanceEstablecimiento = null
    },
    removeArea () {
      this.indiceArea--
      var instanceArea = this.instanciasAreas.pop()
      instanceArea.$destroy()
      instanceArea.$el.remove()
      instanceArea = null
    },
    guardar () {
      let empresaId = this.empresaId
      let arrayRuc = []
      let arrayBool = {}
      let rucRepetido = false
      let rucActual = ''
      if (!this.$refs.form.validate()) {
        this.$store.commit('setVerified', false)
      }
      this.instanciasAreas.forEach(function (area) {
        area.verify()
      })
      //Agregamos el ruc del establecimiento matriz
      arrayRuc.push(this.empresa.RUC)
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.verify()
        rucActual = establecimiento.getRuc()
        rucRepetido = this.rucIngresado(rucActual, arrayRuc)
        arrayRuc.push(establecimiento.getRuc())
      }.bind(this))
      //Ahora verificaremos cada uno de los RUC ingresados. Estos no deberían existir en la bd      
      return new Promise((resolve, reject) => {
        let url = '/api/web/establecimientos/buscar/por?ruc=' + arrayRuc.join()
        Vue.http.get(url)
          .then((resp) => {
          if (resp.body.estado) {
            arrayBool = resp.body.datos
            //Se recorre la lista a ver si hay un RUC ya ingresado.
            this.RUCbd(arrayBool, arrayRuc)

            if (this.$store.state.verified) {
              this.loading = true
              this.agregar()
            }
            // Si en este punto no ha ocurrido un error, entonces se puede guardar
            this.$store.commit('setVerified', true)            
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
      this.loading = false
    },
    //Esta función regresa verdadero si el RUC ya ha sido ingresado en el formulario
    rucIngresado (ruc, arrayRuc) {
      arrayRuc.forEach(function  (prueba) {
        if (prueba === ruc) {
          this.error.message = "el RUC " + ruc + " es ingresado más de una vez"
          this.error.trigger = true
          this.$store.commit('setVerified', false) //El RUC ya ha sido ingresado
          return true
        }
      }.bind(this))
      return false
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
    RUCbd (objectRuc, arrayRuc) {
      let prueba = objectRuc
      for (let ruc in objectRuc) {
        if ( objectRuc[ruc] ){
          this.$store.commit('setVerified', false)
          this.error.message = "el RUC " + ruc + " ya existe"
          this.error.trigger = true
        }
      }
    },
    agregar () {
      let nombre = this.empresa.nombre
      let actividadComercial = this.empresa.actividad
      let razonSocial = this.empresa.razon
      let urlFoto = this.imageUrl
      let direccion = this.empresa.direccion
      let ruc = this.empresa.RUC
      let empresaId = 0
      let matrizId = 0
      let image = urlFoto.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, '')
      return new Promise((resolve, reject) => {
        Vue.http.post('https://api.imgur.com/3/image', { image }, {headers: { 'Authorization': 'Client-ID 32ac2643d018e56' }})
          .then((resp) => {
            let urlFoto = resp.body.data.link
            return urlFoto
          })
          .then ((urlFoto) => {
            return Vue.http.post('/api/web/empresas', {nombre, actividadComercial, razonSocial, urlFoto, direccion, ruc})
          })
          .then((resp) => {
            if (resp.body.estado) {
              empresaId = resp.body.datos.id
              matrizId = resp.body.datos.establecimiento.id
              this.instanciasAreas.forEach(function (area) {
                area.crear(Number(matrizId))
              })
              this.instanciasEstablecimientos.forEach(function (establecimiento) {
                establecimiento.crear(Number(empresaId))
              })
              this.created = true
              return resolve()
            } else {
              this.$Store.commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
    },
    cleaner () {
      this.$refs.form.reset()
      this.instanciasAreas.forEach(function (area) {
          area.$destroy()
          area.$el.remove()
          area = null
      })
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.$destroy()
        establecimiento.$el.remove()
        establecimiento = null
      })
      this.indiceArea = 1
      this.indice = 1
      this.insertarArea()
    },
    acceptDialog () {
      this.cleaner()
      this.show = false
    },
    isUrl (str) {
          let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if (regexp.test(str))
          {
            return true;
          }
          else
          {
            return "Url no válida";
          }
        }
  },
  data () {
    return {
      valid: true,
      indice: 1,
      indiceArea: 1,
      empresaId: 1,
      imageName: '',
      imageUrl: '',
      imageFile: '',
      instanciasEstablecimientos: [],
      instanciasAreas: [],
      empresa: {
        nombre: '',
        actividad: '',
        razon: '',
        urlFoto: '',
        direccion: '',
        RUC: ''
      },
      confirm: {
        open: false,
        title: '¿Está seguro que quiere salir?',
        message: 'prueba',
        acceptMessage: 'Sí',
        declineMessage: 'No'
      },
      error: {
        message: '',
        trigger: false
      },
      created: false,
      loading: false,
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras',
        rucMin: v => (v && v.length ==13) || 'Debe tener 13 letras',
        RUCvalidate: v => {
          if (MyModule(v)[0]) {
            return true
          }
          return MyModule(v)[1]
        },
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
      }
    }
  }
}
</script>
<style>
</style>
