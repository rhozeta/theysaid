<template>
  <div id="app">
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/Navigation.vue'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
