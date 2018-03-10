<template>
<div>
<div class='container'>
  <div class='card'>
    <div class='card-body'>
      <h1>Login</h1>
      <p>female/finance/nyc</p>
      <div class='form-group'>
        <div>
        <h4>Email</h4>
        <input type='text' name='email' class='form-control' v-model='email'>
        </div>
        <div>
        <h4>Password</h4>
        <input type='password' name='password' class='form-control' v-model='password'>
        </div>
        <div class='error' v-html='error' />
        <button class='btn btn-success btn-lg' @click='loginUser'>Login</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  mounted () {

  },
  methods: {
    async loginUser () {
      try {
        const response = await AuthenticationService.loginUser({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Main'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
@import '../assets/css/main.css';
.error {
  color: red;
}
</style>
