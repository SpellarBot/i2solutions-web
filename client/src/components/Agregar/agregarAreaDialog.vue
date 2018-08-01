<template>
    <main>
        <v-dialog max-width="60%" v-model="showArea" @keydown.esc="showArea=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="showArea=false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Agregar nuevas areas</v-toolbar-title>
        </v-toolbar>
         <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md12>
              <div ref="areas">
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn @click.stop="guardar()">Crear</v-btn>
        </v-card>
    </v-dialog>
    <v-dialog v-model="loading" persistent max-width="700px">
      <v-card>
        <v-card-text>Creando areas, por favor espere...</v-card-text>
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
    <v-dialog v-model="created" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Area creado con éxito!</span>
        </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="showArea= false; loading = false; created = false">Ok</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
    </main>
</template>
<script>
import Vue from 'vue'
import agregarArea from './agregarArea'
export default {
  name: 'agregarAreaDialog',
  props: ['visible', 'establecimientoId'],
  computed: {
    showArea: {
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
  data () {
    return {
      instanciasAreas: [],
      indiceArea: 1 ,
      loading: false,
      created: false  
    }
  },
  methods: {
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
    guardar () {
      let somethingWrong = false
      let Promise = require("bluebird");
      this.instanciasAreas.forEach(function (area) {
        if (!area.verify()) {
          somethingWrong = true
        }
      })
      if (somethingWrong) {
        this.instanciasAreas.forEach(function (area) {
          area.crear(Number(this.establecimientoId))
        }.bind(this))
      }
      this.loading = true
      Promise.delay(1000).then(function() {
          return "Hello world";
      }.bind(this)).delay(500).then(function(helloWorldString) {
          this.loading = false
          this.created = true
      }.bind(this));
    }
  }  
}
</script>
