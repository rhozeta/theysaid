<template>
<div>
  <nav class="navbar navbar-expand-md navbar-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img id="nav-logo" src="content/imgs/truck.png" alt="logo">
    </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#rates">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">Contact</a>
        </li>
      </ul>

    </div>
  </nav>

  <!-- jumbotron -->

<div id="landing">
  <vue-particles color="#000000" id="particles-js"></vue-particles>
      <div id="cta">
        <img src="http://via.placeholder.com/200x200">
        <div>
          <p>FIND YOUR FORUM</p>
          <p id="tagline">See what the women in your field have to say.</p>
          <span id="cta-signup" contenteditable="true" class="form-control" type="email" placeholder="Enter your email address.">Enter your email address.</span>
          <button type="button" class="button-color btn btn-primary btn-lg">SIGN UP</button>
        </div>

      </div>
</div>
  <!-- services -->
  <div id="about">
    <div class="container">
      <div class="row about">
        <div class="col-md-4 col-sm-12">
          <h3>Anonymous</h3>
          <icon class="about-icon" name="question-circle" scale="5"></icon>
          <h4>100% anonymous.</h4>
          <p>Get and give candid "off the record" feedback.</p>
        </div>
        <div class="col-md-4 col-sm-12">
          <h3>Private</h3>
          <icon class="about-icon" name="user-secret" scale="5"></icon>
          <h4>Insiders only.</h4>
          <p>Members start threads about things you care about.</p>
        </div>
        <div class="col-md-4 col-sm-12">
          <h3>Exclusive</h3>
          <icon class="about-icon" name="stop-circle" scale="5"></icon>
          <h4>No boys allowed.</h4>
          <p>And no party crashers.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- example forum-->
  <div id="example">
    <div class="container">
        <div>
          <h3 style="padding-bottom: 25px;">finance/female/nyc</h3>
          <p>Membership in this forum is limited to women professionals from select Finance companies. This ensures threads and feedback are relevant to you.</p>
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
      <div class="row">
       <div class="col-md-6 col-sm-12">
         <label for="name">Name*</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Name" required="true">
      </div>

       <div class="col-md-6 col-sm-12">
         <label for="industry">Industry*</label>
           <select id="industry" class="form-control" required="true">
        <option>Finance</option>
        <option>Marketing</option>
        <option>Law/Legal Services</option>
      </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <label for="email">Work E-mail*</label>
        <input type="email" id="email" class="form-control" required="true">
      </div>
      <div class="col-md-6 col-sm-12">
        <label for="company">Company*</label>
        <input type="text" id="company" class="form-control" required="true">
      </div>
    </div>
     <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
    <button action="" class="btn btn-secondary btn-lg">SEND</button>
    </div>
  </div>

  <!-- foot -->
  <footer>
    <p>
      <i>Copyright theysaid.co 2018 All Rights Reserved</i>
    </p>
    <p>
      <i>
        <a href="">NYC.</a> |
        <a href="">example@theysaid.co</a> |
        <a href="">(###-###-####)</a>
      </i>
    </p>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'land'
}

</script>

<style>
  @import '../assets/css/land.css';
</style>
