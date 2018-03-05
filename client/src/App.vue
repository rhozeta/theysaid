<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    name: ['home', 'land', 'main']
  }
}
</script>
