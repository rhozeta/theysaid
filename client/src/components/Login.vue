<template>
  <div class='card'>
    <div class='card-body'>
      <h1>Log In</h1>
      <p>female/finance/nyc</p>
      <div class='form-group'>
        <div>
        <h4>Email</h4>
        <input type='text' name='email' class='form-control' v-model='email'>
        </div>
        <div>
        <h4>Password</h4>
        <input type='password' name='email' class='form-control' v-model='password'>
        </div>
        <div>
        <button class='btn btn-success btn-lg' @click='loginUser'>Login</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {

  },
  methods: {
    async loginUser () {
      const email = this.email
      const password = this.password
      await AuthenticationService.loginUser(email, password)
    }
  }
}
</script>

<style>
@import '../assets/css/main.css';
</style>
