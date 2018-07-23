<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">establecimiento {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md10 offset-md1>
              <v-form ref="form2" lazy-validation>
                <v-text-field
                  label="Nombre"
                  required
                  v-model="establecimiento.nombre"
                  :rules="[rules.required, rules.nameMin]"
            ></v-text-field>
            <v-text-field
              label="Dirección"
              required
              v-model="establecimiento.direccion"
              :rules="[rules.required, rules.nameMin]"
            ></v-text-field>
            <v-text-field
              label="RUC"
              required
              v-model="establecimiento.RUC"
              :rules="[rules.required, rules.RUCvalidate, rules.rucMin]"
              :counter="13"
              mask="#############"
            ></v-text-field>
              </v-form>
              <div ref="CompAreas">
              </div>
              <v-layout row justify-space-between>
                <v-flex md4>
                  <h3>¿Desea agregar áreas?</h3>
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
                    @click.native="insertarArea"
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
import agregarArea from './agregarArea'
import MyModule from '../MyModule.js'
import Vuex from 'vuex'
import { store } from './../../store'
export default {
  name: 'agregarEstablecimiento',
  props: ['index', 'empresaId'],
  components: {
    agregarArea
  },

  data () {
    return {
      indice: 1,
      instanciasAreas: [],
      establecimiento: {
        nombre: '',
        direccion: '',
        RUC: '',
        empresaId: ''
      },
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras',
        rucMin: v => (v && v.length ==13) || 'Debe tener 13 letras',
        RUCvalidate: v => {
          if (MyModule(v)[0]) {
            return true
          }
          return MyModule(v)[1]
        }
      }
    }
  },
  mounted () {
    this.insertarArea()
  },
  methods: {
    insertarArea () {
      //  Lo que queremos hacer aquí es crear una nueva clase para que luego pueda ser referenciado
      //  Vue.extend me permite crear una clase a partir de un componente
      var AreaClass = Vue.extend(agregarArea)
      //  Creado la clase puedo hacer una instancia de la misma.
      var instanceArea = new AreaClass({
        //  Aquí van colocado los props que pida el componente
        parent: this,
        propsData: {index: this.indice, indiceEstablecimiento: this.index}
      })
      //  Simple nombre.
      this.indice++
      // Agrego la instancia a un arreglo de instancias para luego poder eliminarlo.
      this.instanciasAreas.push(instanceArea)
      //  Agrego la instancia al DOM de la página dado el ref "establecimientos". Colocado en un <div>
      instanceArea.$mount()
      this.$refs.CompAreas.appendChild(instanceArea.$el)
    },
    removeEstablecimiento () {
      this.indice--
      // Cojo el valor de la última instancia agregada
      var instanceArea = this.instanciasAreas.pop()
      // c-elimina
      instanceArea.$destroy()
      instanceArea.$el.remove()
      instanceArea = null
    },
    cleaner () {
      this.$refs.form.reset()
      this.instanciasAreas.forEach(function (areas) {
        areas.$destroy()
        areas.$el.remove()
        areas = null
      })
    },
    prueba () {
      console.log('establecimiento: ' + this.index)
      this.instanciasAreas.forEach(function (area) {
        area.prueba()
      })
    },
    verify () {
      if (!this.$refs.form2.validate()) {
        // Al primer error, el valor de verified se hace falso.
        this.$store.commit('setVerified', false)
      }
      this.instanciasAreas.forEach(function (area) {
        area.verify()
      })
    },
    getRuc () {
      return this.establecimiento.RUC
    },
    crear (empresaId) {
      this.establecimiento.empresaId = Number(empresaId)
      this.agregar()
    },
    agregar () {
      let nombres = this.establecimiento.nombre
      let direccion = this.establecimiento.direccion
      let ruc = this.establecimiento.RUC
      let empresasId = Number(this.establecimiento.empresaId)
      return new Promise((resolve, reject) => {
        Vue.http.post('/api/web/establecimientos', {nombres, direccion, ruc, empresasId})
          .then((resp) => {
            if (resp.body.estado) {
              this.instanciasAreas.forEach(function (area) {
                area.crear(resp.body.datos.id)
              })
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
<style>
.pointer{
  cursor: pointer;
}
</style>
