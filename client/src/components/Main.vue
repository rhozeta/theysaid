<template>
  <div class="container-fluid">
    <div class='row'>
      <!-- #### sidebar #### -->
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
      <!-- #### post display #### -->
      <div class='col-md-10'>
        <div class="container">
          <div class="card">
            <div class="card-body post-container">
              <h1>{{ selectedPost.title }}</h1>
              <p>{{ selectedPost.body }}</p>
          </div>
        </div>
      <!-- #### comments #### -->
        <div class="card comment-display">
          <div class="card new-comment form-group">
            <textarea class="form-control" name="newComment" id="newComment" cols="30" rows="3" v-model='commentBody'></textarea>
            <button class="form-control btn btn-success" @click='addComment(selectedPost._id)'>SUBMIT COMMENT</button>
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
      selectedPost: [],
      post: [],
      commentBody: ''
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
    async showPost (id) {
      const response = await PostsService.selectPost(id)
      this.selectedPost = response.data.selectedPost
      var thisPost = '#' + id
      $('div.selected').removeClass('selected')
      $(thisPost).addClass('selected')
    },
    async addComment (id) {
      console.log(id)
      console.log(this.commentBody)
      await PostsService.addComment(id)
      this.$router.push({ name: 'Main' })
    }
  }
}

</script>

<style>
  @import '../assets/css/main.css';

</style>
