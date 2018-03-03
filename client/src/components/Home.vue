<template>
  <div class='hero'>
    <div class='columns'>
      <div class='column is-half-desktop cta-container'>
        <div class='cta-wrapper'>
          <h1 class='title is-1'>FIND YOUR CROWD</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae consequat enim. Suspendisse justo orci, egestas
            ac mattis vulputate, consequat et turpis. Vivamus sit amet velit auctor, posuere diam in.</p>
          <div class='control'>
            <input type='email' v-model='email' id='cta-inp' class='input' name='email' placeholder='email'>
          </div>
          <button @click="register"
          class="button is-primary">SIGN UP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email
      })
      console.log(response.data)
    }
  }
}
</script>
