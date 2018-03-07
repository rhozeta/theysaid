<template>
  <div class="container-fluid">
    <div class='row'>
      <div class='col-md-2 sidebar'>
        <h1>sidebar</h1>
        <div v-for="post in posts" :key='post._id'>
          <div :id='post._id' class="sidebar-post-container" @click='showPost(post._id)'>
            <a>
              <span>
                <b> {{ post.title }}</b>
              </span>
              <br/>
            </a>
          </div>
        </div>
      </div>

      <div class='col-md-10'>
        <div class="container">
          <div class="card">
            <div class="card-body post-container">
              <h1>{{ selectedPost.title }}</h1>
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
      posts: [],
      responseObject: []
    }
  },
  mounted () {
    this.getPosts()
    this.showPost()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async showPost (id) {
      const response = await PostsService.selectPost(id)
      var selectedPost = response.data.selectedPost
      console.log(selectedPost.title)
      var thisPost = '#' + id
      $('div.selected').removeClass('selected')
      $(thisPost).addClass('selected')
    }
  }
}

</script>

<style>
  @import '../assets/css/main.css';

</style>
