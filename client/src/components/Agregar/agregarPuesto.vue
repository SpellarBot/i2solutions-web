<template>
  <div>
    <v-card hover style="cursor: inherit;">
    <v-card-title>
      <h3 class="headline">Puestos {{index}}</h3>
    </v-card-title>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex md8 offset-md1>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  label="Nombre"
                  required
                  :rules="[rules.required, rules.nameMin]"
                >
            </v-text-field>
            <v-text-field
                  label="Descricpión"
                  required
                  :rules="[rules.required, rules.nameMin]"
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
// import Vue from 'vue'
export default {
  name: 'agregarPuesto',
  props: ['index', 'indiceArea', 'indiceEstablecimiento'],
  data () {
    return {
      indice: 0,
      rules: {
        required: v => !!v || 'Campo requerido',
        nameMin: v => (v && v.length >= 2) || 'Debe tener a menos 2 letras'
      }
    }
  },
  methods: {
    prueba () {
      console.log('\t\tPuesto: ' + this.indiceEstablecimiento + '.' + this.indiceArea + '.' + this.index)
    }
  }
}
</script>
