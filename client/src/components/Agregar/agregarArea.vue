<<<<<<< HEAD
<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">Area {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md9 offset-md1>
              <v-form ref="form">
                <v-text-field
                  label="Nombre"
                  required
            ></v-text-field>
            <v-text-field
              label="Actividad"
              required
            ></v-text-field>
            <v-text-field
              label="Foto"
              required
            ></v-text-field>
            <v-text-field
              label="metros 2"
              required
            ></v-text-field>
            <v-text-field
              label="descripción"
              required
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
                    v-if="indice>0"
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
      indice: 0,
      instanciasPuesto: []
    }
  },
  methods: {
    insertarPuesto () {
      var PuestoClass = Vue.extend(agregarPuesto)
      var instancePuesto = new PuestoClass({
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
    prueba () {
      console.log('\tArea: ' + this.indiceEstablecimiento + '.' + this.index)
      this.instanciasPuesto.forEach(function (puesto){
        puesto.prueba()
      })
    }
  }
}
</script>
=======
agregarArea.vue
>>>>>>> 81b1531391c68de1b27dcfcc67de8094f45b567d
