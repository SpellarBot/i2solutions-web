<template>
  <v-dialog v-model="show" max-width="500" @keydown.esc="cerrar()">
    <v-card>
      <v-container @keydown.enter="pedir">
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
                @click="pedir"
              >
                Enviar
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-dialog v-model="showDialog" max-width="300px" @keydown.esc="showDialog = false; cerrar()">
      <v-card>
        <v-container>
          <v-card-title>
            {{titleDialog}}
          </v-card-title>
          <v-card-text>
            {{msgDialog}}
          </v-card-text>
          <v-card-action>
            <v-btn flat @click="showDialog = false; cerrar()">Cerrar</v-btn>
          </v-card-action>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="loading" persistent max-width="700px">
      <v-card>
        <v-card-text>cargando petición...</v-card-text>
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
      showDialog: false,
      msgDialog: '',
      titleDialog: '',
      loading: false,
      valid: false,
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+/.test(v) || 'E-mail debe ser válido'
      ]
    }
  },
  methods: {
    pedir () {
      let correo = this.email
      return new Promise((resolve, reject) => {
        this.loading = true
        Vue.http.put('/api/web/personas/CambioClave/enviarToken', {correo})
          .then((resp) => {
            if (resp.body.estado) {
              this.titleDialog = '¡Éxito!'
              this.msgDialog = 'En breve le llegará un mail con un enlace para hacer el cambio de clave'
              this.showDialog = true
              this.loading = false
              return resolve()
            } else {
              this.$store.commit('setError', resp.body.datos)
              this.titleDialog = "¡oh no!"
              this.msgDialog = resp.body.datos
              this.showDialog = true
              this.loading = false
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