<<<<<<< HEAD
<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">Puestos {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md8 offset-md1>
              <v-form ref="form">
                <v-text-field
                  label="Nombre"
                  required
                >              
            </v-text-field>
            <v-text-field
                  label="Descricpión"
                  required
                  multi-line
            >              
            </v-text-field>            
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>        
      </v-card>
      <br><br>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'agregarPuesto',
  props: ['index','indiceArea' ,'indiceEstablecimiento'],
  data () {
    return {
      indice: 0
    }
  },
  methods: {
    prueba () {
      console.log('\t\tPuesto: ' + this.indiceEstablecimiento + '.' + this.indiceArea + '.' + this.index)
    }
  }
}  
</script>
=======
agregarPuesto.vue
>>>>>>> 81b1531391c68de1b27dcfcc67de8094f45b567d
