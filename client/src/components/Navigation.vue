<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        theysaid
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to='/'>
              <a v-if='!$store.state.isUserLoggedIn' class="nav-link" href="#about">About</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to='register'>
              <a v-if='!$store.state.isUserLoggedIn' class="nav-link" href="">Sign Up</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to='/login'>
              <a v-if='!$store.state.isUserLoggedIn' class="nav-link" href="">Login</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to='/'>
              <a class="nav-link" href="">Contact</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to='profile'>
              <a v-if='$store.state.isUserLoggedIn' class="nav-link" href="">My Profile</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to='main'>
              <a v-if='$store.state.isUserLoggedIn' class="nav-link" href=''>Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a v-if='$store.state.isUserLoggedIn' class="nav-link" href='' @click='logout'>Logout</a>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Land'
      })
    }
  }
}

</script>

<style>
  @import '../assets/css/nav.css';

</style>
