<template>
  <main id="DialogEditarPuestos">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Puesto</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-model = "nombre"
                  label="Nombre" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "descripcion"
                  label="Descripción" required
                  :rules="[rules.required]"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="show = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" flat :disabled="!valid" @click = "crear ()">Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
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
  }
}
</script>
<style>
.izq {
  text-align: left;
}
</style>
