<template>
  <main id="agregarEmpresa">
    <v-dialog fullscreen v-model="show" @keydown.esc="show=false; cleaner()" hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="show = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Agregar nueva empresa</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md12>
              <v-form ref="form">
                <v-flex xs12 md6 lg4>
                  <v-text-field
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg4>
                  <v-text-field
                    label="Actividad Comercial"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex md12>
                    <v-text-field
                    class="razon"
                      label="Razon Social"
                      required
                    ></v-text-field>
                </v-flex>
                  <v-text-field
                  class="direccion"
                    label="Dirección"
                    required
                  ></v-text-field>
                  <v-text-field
                  class="ruc"
                    label="RUC"
                    required
                    mask="#############"
                  ></v-text-field>
              </v-form>
              <br><br>
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
                    v-if="indice>0"
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
              <v-btn @click.native="guardar()">submit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </main>
</template>
<script>
import Vue from 'vue'
import agregarEstablecimiento from './agregarEstablecimiento'
export default {
  name: 'agregarEmpresa',
  props: ['visible'],
  components: {
    agregarEstablecimiento
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
  methods: {
    insertarEstablecimiento () {
      //  Lo que queremos hacer aquí es crear una nueva clase para que luego pueda ser referenciado
      //  Vue.extend me permite crear una clase a partir de un componente
      var EstablecimientoClass = Vue.extend(agregarEstablecimiento)
      //  Creado la clase puedo hacer una instancia de la misma.
      var instanceEstablecimiento = new EstablecimientoClass({
        //  Aquí van colocado los props que pida el componente
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
    removeEstablecimiento () {
      this.indice--
      // Cojo el valor de la última instancia agregada
      var instanceEstablecimiento = this.instanciasEstablecimientos.pop()
      // c-elimina
      instanceEstablecimiento.$destroy()
      instanceEstablecimiento.$el.remove()
      instanceEstablecimiento = null
    },
    guardar () {
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.prueba()
      })
    },
    cleaner () {
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.$destroy()
        establecimiento.$el.remove()
        establecimiento = null
      })
    }
  },
  data () {
    return {
      indice: 0,
      instanciasEstablecimientos: []
    }
  }
}
</script>
<style>
</style>
