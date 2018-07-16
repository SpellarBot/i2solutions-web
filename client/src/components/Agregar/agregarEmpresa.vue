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
                    required
                    :rules="[rules.required, rules.nameMin]"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg4>
                  <v-text-field
                    label="Actividad Comercial"
                    required
                    :rules="[rules.required, rules.nameMin]"
                  ></v-text-field>
                </v-flex>
                <v-flex md12>
                    <v-text-field
                    class="razon"
                      label="Razon Social"
                      required
                      :rules="[rules.required, rules.nameMin]"
                    ></v-text-field>
                </v-flex>
                  <v-text-field
                  class="direccion"
                    label="Dirección"
                    required
                    :rules="[rules.required, rules.nameMin]"
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
                    v-if="indice>1"
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
            <v-btn color="primary" flat @click.stop="cleaner(); show=false; confirm.open=false; insertarEstablecimiento(); indice=0">Sí</v-btn>
            <v-btn color="primary" flat @click.stop="confirm.open=false">No</v-btn>            
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
  mounted () {
    this.insertarEstablecimiento()
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
      this.valid = this.$refs.form.validate()      
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.prueba()
      })
    },
    cleaner (){
      this.$refs.form.reset()
      this.instanciasEstablecimientos.forEach(function (establecimiento) {
        establecimiento.$destroy()
        establecimiento.$el.remove()
        establecimiento = null
      })
    },
    declineDialog(){
      console.log("hey hey")
    },
    acceptDialog() {
      this.cleaner()
      this.show = false
    }
  },
  data () {
    return {
      valid: true,
      indice: 0,
      instanciasEstablecimientos: [],
      confirm: {
        open: false,
        title: '¿Está seguro que quiere salir?',
        message: 'prueba',
        acceptMessage: 'Sí',
        declineMessage: 'No'
      },
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras'
      }
    }
  }
}
</script>
<style>
</style>
