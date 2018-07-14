<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">establecimiento {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md10 offset-md1>
              <v-form ref="form">
                <v-text-field
                  label="Nombre"
                  required
            ></v-text-field>
            <v-text-field
              label="Dirección"
              required
            ></v-text-field>
            <v-text-field
              label="RUC"
              required
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
                    v-if="indice>0"
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
export default {
  name: 'agregarEstablecimiento',
  props: ['index'],
  components: {
    agregarArea
  },
  data () {
    return {
      indice: 0,
      instanciasAreas: []
    }
  },
  methods: {
    insertarArea () {
      //  Lo que queremos hacer aquí es crear una nueva clase para que luego pueda ser referenciado
      //  Vue.extend me permite crear una clase a partir de un componente
      var AreaClass = Vue.extend(agregarArea)
      //  Creado la clase puedo hacer una instancia de la misma.
      var instanceArea = new AreaClass({
        //  Aquí van colocado los props que pida el componente
        propsData: {index: this.indice,
          indiceEstablecimiento: this.index}
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
    prueba () {
      console.log('establecimiento: ' + this.index)
      this.instanciasAreas.forEach(function (area) {
        area.prueba()
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
