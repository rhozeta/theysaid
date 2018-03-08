<template>
  <div class='card'>
    <div class='card-body'>
      <h1>Sign Up</h1>
      <p>female/finance/nyc</p>
      <div class='form-group'>
        <div>
        <h4>Email</h4>
        <input type='text' name='email' class='form-control' v-model='email'>
        </div>
        <div>
        <h4>Password</h4>
        <input type='text' name='email' class='form-control' v-model='password'>
        </div>
        <div>
        <h4>Password (again)</h4>
        <input type='text' name='emailTest' class='form-control' v-model='password2'>
        </div>
        <button class='btn btn-success btn-lg' @click='addUser'>Sign Up</button>
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
      password: '',
      password2: ''
    }
  },
  mounted () {

  },
  methods: {
    async addUser () {
      if (this.password2.length !== 0) {
        if (this.password !== this.password2) {
          alert('your passwords do not match!')
        } else {
          const email = this.email
          const password = this.password
          alert('welcome to female/finance/nyc')
          await AuthenticationService.emailCheck(email, password)
        }
      }
    }
  }
}
</script>

<style>
@import '../assets/css/main.css';
</style>
