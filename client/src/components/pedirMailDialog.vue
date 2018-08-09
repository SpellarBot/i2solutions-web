<template>
  <v-dialog v-model="show" max-width="500" @keydown.esc="cerrar()">
    <v-card>
      <v-container @keydown.enter="submit">
        <v-layout grid-list-md>
          <v-flex md12 xs12>
            <v-card-title>
              <h3>¿Ha olvidado su contraseña?</h3>
            </v-card-title>
            <v-card-text>
              <p>Escriba su mail y le enviaremos un enlace para cambiar su contraseña</p>
            </v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation style="width:70%; margin: auto">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                @click="submit"
              >
                Enviar
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'pedirMailDialog',
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
  data () {
    return {
      email: '',
      user: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+/.test(v) || 'E-mail debe ser válido'
      ]
    }
  },
  methods: {
    submit () {
      let correo = this.email
      let usuario = 'lala'
      console.log(correo)
      return new Promise((resolve, reject) => {
        Vue.http.put('/api/web/personas/CambioClave/enviarToken', {correo, usuario})
          .then((resp) => {
            if (resp.body.estado) {
              return resolve()
            } else {
              this.$store.commit('setError', resp.body.datos)
              return reject(resp.body.datos)
            }
          }).catch((err) => {
            this.$store.commit('setError', err)
            return reject(err)
          })
      })
    },
    cerrar () {
      this.$refs.form.reset();
      this.show = false
    }
  }
}
</script>