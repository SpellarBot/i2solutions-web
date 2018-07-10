<template>
  <main id="DialogEditarPersonas">
    <v-dialog v-model="show" @keydown.esc="show=false" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Persona</span>
        </v-card-title>
        <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-model = "nombres"
                  label="Nombres" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model = "apellidos"
                  label="Apellidos" required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-select
              :items="roles"
              v-model="rol"
              label="Rol"
              required=""
              :rules="[rules.required]"
            ></v-select>
                <v-text-field
              v-model="correo"
              label="Correo"
              :rules="emailRules"
              required
            ></v-text-field><v-text-field
              v-model="cedula"
              label="Cédula"
              maxlength=10
              :rules="cedulaRules"
              :error-messages="errors.collect('cedula')"
              v-validate="'required | max:10'"
              required
              :counter=10
            ></v-text-field>
            <v-text-field
              v-model="telefono"
              label="Télefono"
              maxlength=10
              :rules="telefonoRules"
              :error-messages="errors.collect('telefono')"
              v-validate="'required | max:10'"
              :nudge-right="40"
              required
              counter="10"
            ></v-text-field>
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  label="Fecha de Nacimiento"
                  readonly
                  required
                  :rules="[rules.required]"
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                  :rules="[rules.required]"
                ></v-date-picker>
              </v-menu>
              <v-text-field
              v-model="perfilOcupacional"
              label="Perfil Ocupacional"
              required
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="usuario"
              label="Usuario"
              required
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
      date: null,
      menu: false,
      valid: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      },
      emailRules: [
        v => !!v || 'El campo correo es obligatorio',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingrese correo válido'
      ],
      telefonoRules: [
        v => !!v || 'telefono es requerido',
        v => (v && v.length >= 10) || 'Teléfono debe tener 10 caracteres',
        v => (!Number.isNaN(parseInt(v))) || 'célular no valido'
      ],
      cedulaRules: [
        v => !!v || 'cédula es requerido',
        v => (v && v.length >= 10) || 'La cédula debe tener 10 caracteres',
        v => (!Number.isNaN(parseInt(v))) || 'cédula no valida'
      ],
      roles: [{
        value: 'Jefe de Seguridad',
        text: 'Jefe de Seguridad'
      },
      {
        value: 'Inspector de Seuridad',
        text: 'Inspector de Seguridad'
      },
      {
        value: 'Empleado',
        text: 'Empleado'
      }
      ]
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'Año'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  },
  name: 'DialogEditarPersonas',
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
