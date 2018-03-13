<template>
  <div id='wrapper'>
    <div class='container'>
      <div class='card panel'>
        <div class='card-body'>
          <h1>Sign Up</h1>
          <p>female/finance/nyc</p>
          <p><i>Please note that to register you must use your work email address (@baml.com, @fanniemae.com etc.).<br>If your organization is not yet accepted, please fill out the contact form on the main page and request access.</i></p>
          <div class='form-group'>
            <div>
              <h4>Email</h4>
              <input type='text' name='email' class='form-control' v-model='email'>
            </div>
            <div>
              <h4>Password</h4>
              <input type='password' name='password' class='form-control' v-model='password'>
            </div>
            <div>
              <h4>Password (again)</h4>
              <input type='password' name='password2' class='form-control' v-model='password2'>
            </div>
            <div class='error' v-html='error' />
            <button class='btn btn-success btn-lg' @click='addUser'>Sign Up</button>
          </div>
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
      password: '',
      password2: '',
      error: null
    }
  },
  mounted () {

  },
  methods: {
    async addUser () {
      try {
        const response = await AuthenticationService.registerUser({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Login'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<style>
  @import '../assets/css/signup.css';
  .error {
    color: red;
  }

</style>
