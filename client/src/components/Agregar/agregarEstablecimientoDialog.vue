<template>
    <main>
        <v-dialog fullscreen v-model="show" @keydown.esc="confirm.open=true" hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="confirm.open=true">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Agregar establecimientos</v-toolbar-title>
        </v-toolbar>
         <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md10>
              <div ref="establecimientos">
              </div>
            </v-flex>
          </v-layout>
        </v-container>
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
        <v-btn @click.native="guardar()" :disabled="!valid">Crear establecimientos</v-btn>
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
      <v-dialog v-model="loading" persistent max-width="700px">
      <v-card>
        <v-card-text>Creando la establecimientos, por favor espere...</v-card-text>
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
    <v-dialog v-model="created" max-width="500px" @keydown.esc="cleaner(); show=false; created=false; insertarArea(); indice=1;">
      <v-card>
        <v-card-title>
          <span class="headline">¡Establecimientos creados con éxito!</span>
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
    </footer>
    </main>
</template>
<script>
import Vue from 'vue'
import agregarEstablecimiento from './agregarEstablecimiento'
export default {
  name: 'agregarEstablecimientoDialog',
  props: ['visible', 'idEmpresa'],
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
    this.insertarEstablecimiento()
  },
  methods: {
    insertarEstablecimiento () { //Agrega establecimiento al DOM
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
    removeEstablecimiento () { //Elimina el último establecimiento colocado en el DOM
      this.indice--
      // Cojo el valor de la última instancia agregada
      var instanceEstablecimiento = this.instanciasEstablecimientos.pop()
      // c-elimina
      instanceEstablecimiento.$destroy()
      instanceEstablecimiento.$el.remove()
      instanceEstablecimiento = null
    },
    cleaner () { //Limpia los valores ingresados
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.$destroy()
        establecimiento.$el.remove()
        establecimiento = null
      })
      this.indice = 1
      this.insertarEstablecimiento()
    },
    guardar () { //guarda la información en la base de datos
      let empresaId = this.idEmpresa
      let arrayRuc = []
      let arrayBool = {}
      let rucRepetido = false
      let rucActual = ''
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.verify()
        rucActual = establecimiento.getRuc()
        rucRepetido = this.rucIngresado(rucActual, arrayRuc)
        arrayRuc.push(establecimiento.getRuc())
      }.bind(this))
      return new Promise((resolve, reject) => {
        let url = '/api/web/establecimientos/buscar/por?ruc=' + arrayRuc.join()
        Vue.http.get(url)
          .then((resp) => {
            if (resp.body.estado) {
              arrayBool = resp.body.datos
              // Se recorre la lista a ver si hay un RUC ya ingresado.
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
          })
          .catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
      if (!this.somethingWrong) {
        this.instanciasEstablecimientos.forEach(function (establecimiento) {
          establecimiento.crear(Number(empresaId))
        })
      }
    },
    async asyncForEachCreator (instanciaArray, id) {
      for (let index = 0; index < instanciaArray.length; index++) {
        await instanciaArray[index].crear(Number(id))
      }
    },
    RUCbd (objectRuc, arrayRuc) { //Verifica si el RUC ya existía en la base de datos
      for (let ruc in objectRuc) {
        if (objectRuc[ruc]) {
          this.$store.commit('setVerified', false)
          this.error.message = 'el RUC ' + ruc + ' ya existe'
          this.error.trigger = true
        }
      }
    },
    rucIngresado (ruc, arrayRuc) { //Verifica si el RUC ya ha sido ingresado por el usuario.
      arrayRuc.forEach(function (prueba) {
        if (prueba === ruc) {
          this.error.message = 'el RUC ' + ruc + ' es ingresado más de una vez'
          this.error.trigger = true
          this.$store.commit('setVerified', false) // El RUC ya ha sido ingresado
          return true
        }
      }.bind(this))
      return false
    },
    agregar () { //Agregas el establecimiento a la base de datos.
      let id = this.idEmpresa
      const startEstablecimientos = async (instanciaArray, id) => {
        for (let index = 0; index < instanciaArray.length; index++) {
          await instanciaArray[index].crear(Number(id))
        }
      }
      return new Promise(async (resolve, reject) => {
        return (startEstablecimientos(this.instanciasEstablecimientos, Number(id)))
          .then(async (resp) => {
            this.created = true
            this.loading = false
            return resolve()
          })
          .catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
    }
  },
  data () {
    return {
      //Variables a manipular del componente
      valid: true,
      indice: 1,
      instanciasEstablecimientos: [],
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
      loading: false,
      created: false
    }
  }
}
</script>

<style>
.bottom-right-corner {
  position: absolute;
  right:    0;
  bottom:   0;
  margin-right: 3%;
  margin-bottom: 2%;
}
</style>
