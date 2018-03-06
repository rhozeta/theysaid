
<template>
  <div class="container-fluid">
    <div class='row'>
      <div class='col-md-2 sidebar'>
        <h1>sidebar</h1>
        <div v-for="post in posts" :key="post.ID">
          <div class="sidebar-post-container">
          <a href="">
      <div>
        <span><b>{{ post.title }}</b></span><br />
    <span><p>{{ post.tags }}</p></span>

      </div>
      </a>
    </div>
        </div>
      </div>

      <div class='col-md-10'>
        <div class="container">
            <div class="card">
              <div class="card-body">
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
    }
  }
}
</script>

<style>
   @import '../assets/css/main.css';
</style>
