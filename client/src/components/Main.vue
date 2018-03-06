
<template>
  <div class="container-fluid">
    <div class='row'>
      <div class='col-md-2 sidebar'>
        <h1>sidebar</h1>
        <div v-for="(post, index) in posts" :key='index'>
          <div :id='index' class="sidebar-post-container" @click='showPost(index)'>
          <a>
        <span><b>{{ index }}  {{ post.title }}</b></span><br/>
        <span>{{ post.body }}</span>

      </a>
    </div>
        </div>
      </div>

      <div class='col-md-10'>
        <div class="container">
            <div class="card">
              <div class="card-body post-container">
              <div v-for="(post, index) in posts" :key='index'>
        <span><b>{{ post.title }}</b></span><br/>
              </div>
              </div>
            </div>
        </div>

      </div>
    </div>
</div>
</template>

<script>
import PostsService from '../services/PostsService.js'

export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    showPost (id) {
      console.log(id)
      $('div.selected').removeClass('selected')
      $('#' + id).addClass('selected')
    }
  }
}
</script>

<style>
   @import '../assets/css/main.css';
</style>
