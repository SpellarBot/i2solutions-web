<template>
  <main id="dashboard">
    <h1>Dashboard</h1>
    <v-btn
      @click="logout"
    >
      logout
    </v-btn>
  </main>
</template>

<script>
import router from '../router'
export default {
  name: 'dashboard',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    }
  }
}
</script>

<style>
</style>
