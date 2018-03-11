<template>
  <div class="container-fluid">
    <div class='row'>
      <!-- #### sidebar #### -->
      <div class='col-md-2 sidebar'>
        <h3>female/finance/nyc</h3>
        <div v-for="post in posts" :key='post._id'>
          <div :id='post._id' class="sidebar-post-container card" @click='showPost(post._id)'>
                <b>{{ post.title }}</b>
                <p v-if="post.likes">{{  post.likes.likedBy.length }} likes</p>
                <p>{{  post.published | moment('LTS ddd, MMMM Do YYYY') }}</p>
          </div>
        </div>
      </div>
      <!-- #### post display #### -->
      <div class='col-md-10'>
        <div class="container">
          <div class="card">
            <div class="card-body post-container">
              <span @click='likePost(selectedPost._id, true)'>
              <icon name='arrow-up' scale='2'></icon>
              </span>
              <span @click='likePost(selectedPost._id, false)'>
              <icon name='arrow-down' scale='2'></icon>
              </span>
                <span v-if="selectedPost.likes">{{ selectedPost.likes.likedBy.length }}</span>
              <h1>{{ selectedPost.title }}</h1>
              <p>{{ selectedPost.body }}</p>
              <div class="card comment-display">
          <div class="card new-comment form-group">
               <textarea class="form-control" rows="5" cols="15" placeholder="Comment" v-model="commentBody"></textarea>
            <button class="form-control btn btn-success" @click='addComment(selectedPost._id)'>SUBMIT COMMENT</button>
          </div>
        <!-- #### render comments #### -->
        <div v-for="(comment, index) in selectedPost.comments" :key='index' class='comment-box'>
          <div class='card'><p>{{ index }}{{ selectedPost.comments[index] }}</p></div>
        </div>
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
      posts: [],
      selectedPost: [],
      post: [],
      like: '',
      likes: [],
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
      this.likes = this.selectedPost.likes
      console.log(this.date)
      console.log(this.likes)
    },
    async showPost (id) {
      $('.post-container').css({'display': 'block'})
      const response = await PostsService.selectPost(id)
      this.selectedPost = response.data.selectedPost
      var thisPost = '#' + id
      $('div.selected').removeClass('selected')
      $(thisPost).addClass('selected')
    },
    async addComment (id) {
      console.log(id)
      await PostsService.addComment(id, this.commentBody)
      this.$router.push({ name: 'Main' })
    },
    async likePost (id, choice) {
      const userId = this.$store.state.user._id
      console.log(id)
      if (choice === true) {
        ++this.selectedPost.likes.amount
        await PostsService.likePost(id, 1, userId)
      } else {
        --this.selectedPost.likes.amount
        await PostsService.likePost(id, -1, userId)
      }
    }
  }
}
</script>

<style>
  @import '../assets/css/main.css';
</style>
