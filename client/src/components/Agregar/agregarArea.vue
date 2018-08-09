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
                  maxlength=50
                  :counter=50
            ></v-text-field>
            <v-text-field
              label="Actividad"
              v-model="area.actividad"
              required
              :rules="[rules.required, rules.nameMin]"
              maxlength=25
              :counter=25
            ></v-text-field>
            <v-text-field
              label="Metros cuadrados"
              hint="ejemplo(22x02)"
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
              maxlength=100
              :counter=100
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
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras',
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
    async asyncForEachCreator (instanciaArray, id) {
      console.log(id)
      for (let index = 0; index < instanciaArray.length; index++) {
        await instanciaArray[index].crear(Number(id))
      }
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
      return new Promise((resolve, reject) => {
            Vue.http.post('/api/web/areas', {actividad, nombre, metrosCuadrados, descripcionLugar, establecimientosId})
          .then(async (resp) => {
            if (resp.body.estado) {
              const startPuestos = async () => {
                this.asyncForEachCreator(this.instanciasPuesto, resp.body.datos.id)
                console.log('agregando puestos')
              }
              startPuestos()
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
