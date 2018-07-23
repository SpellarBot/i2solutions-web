<template>
    <main>
        <v-dialog fullscreen v-model="show" @keydown.esc="show=false" hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="show=false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Agregar nueva empresa</v-toolbar-title>
        </v-toolbar>
         <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md12>
              <div ref="areas">                
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        </v-card>
    </v-dialog>
    </main>
</template>
<script>
import Vue from 'vue'
import agregarArea from './agregarArea'
  export default {
    name: 'agregarAreaDialog',
    props: ['visible'],
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
        removeArea () {
        this.indiceArea--
        var instanceArea = this.instanciasAreas.pop()
        instanceArea.$destroy()
        instanceArea.$el.remove()
        instanceArea = null
      },
      guardar () {
        this.instanciasAreas.forEach(function (area) {
          if (!area.verify()) {
            this.somethingWrong = true
          }
        })
        if (!this.somethingWrong) {
          this.instanciasAreas.forEach(function (area) {
                  area.crear(Number(this.establecimientoId))
                }.bind(this))
        }
      }
    },
  data () {
    return {
      instanciasAreas: [],
      indiceArea: 1,
      somethingWrong: false,
      establecimientoId: ''
    }
  }
  }
</script>