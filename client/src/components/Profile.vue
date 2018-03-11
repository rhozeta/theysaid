<template>
  <div>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-12 col-md-6 profile'>
          <div class='card'>
            <div class='card-body'>
              <h1>Profile</h1>
            </div>
          </div>
        </div>
        <div class='col-sm-12 col-md-6 posts'>
          <div class='card'>
            <div class='card-body'>
              <h1>My Posts</h1>
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-sm-12 col-md-12 liked'>
          <div class='card'>
            <div class='card-body'><h1>Liked Posts</h1></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import PostsService from '@/services/PostsService'
export default {
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
    }
  }
}
</script>

<style>
 @import '../assets/css/profile.css'
</style>
