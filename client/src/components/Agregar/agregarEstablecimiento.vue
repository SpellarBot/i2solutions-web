<template>
  <v-card>
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
            </v-flex>
          </v-layout>
        </v-container>
        <br><br>
      </v-card>
</template>
<script>
export default {
  name: 'agregarEstablecimiento',
  props: ['index']
}
</script>
