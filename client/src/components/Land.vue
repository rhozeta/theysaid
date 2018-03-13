<template>
<div>
  <!-- jumbotron -->
  <div id="landing">
    <vue-particles color="#000000" id="particles-js"></vue-particles>
    <div id="cta">
      <h1>theysaid</h1>
      <div>
        <p>FIND YOUR FORUM</p>
        <p id="tagline">See what the women in your field have to say.</p>
        <input id="cta-signup" contenteditable="true" class="form-control" type="email" placeholder="Enter your email address." v-model='email'>
        <button class="button-color btn btn-primary btn-lg" @click='emailCheck'>SIGN UP</button>
      </div>

    </div>
  </div>
  <!-- services -->
  <div id="about">
    <div class="container">
      <div class="row about">
        <div class="col-md-4 col-sm-12 about-section">
          <h3>
            <b>Anonymous</b>
          </h3>
          <icon class="about-icon" name="question-circle" scale="5"></icon>
          <h3>
            <b>100% anonymous.</b>
          </h3>
          <p>
            <i>Get and give candid "off the record" feedback.</i>
          </p>
        </div>
        <div class="col-md-4 col-sm-12 about-section">
          <h3>
            <b>Private</b>
          </h3>
          <icon class="about-icon" name="lock" scale="5"></icon>
          <h3>
            <b>Insiders only.</b>
          </h3>
          <p>
            <i>Members start threads about things you care about.</i>
          </p>
        </div>
        <div class="col-md-4 col-sm-12 about-section">
          <h3>
            <b>Exclusive</b>
          </h3>
          <icon class="about-icon" name="stop-circle" scale="5"></icon>
          <h4>
            <b>No boys allowed.</b>
          </h4>
          <p>
            <i>And no party crashers.</i>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- example forum-->
  <div id="example">
    <div class="container">
      <div>
        <h3 style="padding-bottom: 25px;">finance/female/nyc</h3>
        <p>Membership in this forum is limited to women professionals from select Finance companies. This ensures threads
          and feedback are relevant to you.</p>
      </div>
      <div>
        <h2>FIND OUT IF YOU QUALIFY</h2>
        <button action="#cta" class="btn-lg btn btn-success" onClick="document.getElementById('landing').scrollIntoView();">SIGN UP NOW</button>
      </div>
    </div>
  </div>

  <!-- contact -->
  <div id="contact" class="container-fluid">
    <div class="head-white">
      <h2>Contact Us</h2>
    </div>
    <div class="form-group container contact-form">
      <form id='contact'>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <label for="name">Name*</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Name" required="true">
          </div>

          <div class="col-md-6 col-sm-12">
            <label for="industry">Industry*</label>
            <select id="industry" name="industry" class="form-control" required="true">
              <option>Finance</option>
              <option>Marketing</option>
              <option>Law/Legal Services</option>
              <option>Tech</option>
              <option>Retail/Fashion</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <label for="email">Work E-mail*</label>
            <input type="email" name="email" id="email" class="form-control" required="true">
          </div>
          <div class="col-md-6 col-sm-12">
            <label for="company">Company*</label>
            <input type="text" name="company" id="company" class="form-control" required="true">
          </div>
        </div>
        <label for="comment">Comment:</label>
        <textarea class="form-control" name="comment" rows="5" id="comment"></textarea>
        <div class="error" v-html='error'></div>
        <input type="submit" class="btn btn-secondary btn-lg" value="SEND">
      </form>
    </div>
  </div>

  <!-- foot -->
  <footer>
    <p>
      <i style='color: white;'>Copyright theysaid.co 2018 All Rights Reserved</i>
    </p>
  </footer>
</div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js'
export default {
  name: 'land',
  data () {
    return {
      email: '',
      error: null
    }
  },
  methods: {
    async emailCheck () {
      const email = this.email
      await AuthenticationService.emailCheck(email)
    }
  }
}
$('#contact').submit(function (e) {
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var industry = document.getElementById('industry')
  var company = document.getElementById('company')
  var comment = document.getElementById('comment')
  if (!name.value || !email.value || !comment.value || !industry.value || !company.value) {
    this.error = 'Please fill in all the required fields'
  } else {
    $.ajax({
      url: 'https//formspree.io/nicholasmazzotta@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json'
    })
    e.preventDefault()
    $(this).get(0).reset()
    this.error = 'Message sent'
  }
})

</script>

<style>
@import '../assets/css/land.css';

</style>
