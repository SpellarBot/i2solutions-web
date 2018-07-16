<template>
  <div>
    <v-card-actions>
          <v-btn color="primary" flat @click.stop="show=false; decline">{{declineMessage}}</v-btn>
        </v-card-actions>
    <v-dialog v-model="show" max-width="500px" @keydown.esc="show=false">
      <v-card>
        <v-card-title>
          <span class="headline">{{title}}</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <span>
            {{message}}
          </span>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="show=false; decline">{{declineMessage}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'confirmDialog',
  props: ['visible', 'title', 'message', 'accept', 'acceptMessage', 'decline', 'declineMessage'],
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
