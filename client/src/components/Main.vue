<template>
  <div class="container-fluid sidebar-container">
    <div class='row'>
      <!-- #### sidebar #### -->
      <div class='col-md-2 sidebar'>
        <button class='btn btn-sm' data-toggle="popover" data-placement="bottom" data-content="hello" data-html="true">
          Filters
        </button>
        <div v-for="post in posts" :key='post._id'>
          <div :id='post._id' class="sidebar-post-container card" @click='showPost(post._id)'>
            <b>{{ post.title }}</b>
            <p v-if="post.likes">{{ post.likes.length }} likes</p>
            <p class='sidebar-timestamp'>{{ post.published | moment('LTS ddd, MMMM Do YYYY') }}</p>
          </div>
        </div>
      </div>
      <!-- #### post display #### -->
      <div class='col-md-10 post-display'>
        <div class="container-fluid">
          <div class="card post-container">
            <div class="card-body post-content">
              <span @click='likePost(selectedPost._id)'>
                <icon :id="'heart' + selectedPost._id" name='heart' class="heart" scale='2'></icon>
              </span>
              <div>
              <span class='heart' v-if="selectedPost.likes">{{ selectedPost.likes.length }} likes </span>
              </div>
              <h1>{{ selectedPost.title }}</h1>
              <p>{{ selectedPost.body }}</p>
              <div class="comment-display">
                <div class="card new-comment form-group">
                  <textarea class="form-control" rows="5" cols="15" placeholder="Comment" v-model="commentBody"></textarea>
                  <div class='message' v-text='message'></div>
                  <button class="form-control btn btn-success" @click='addComment(selectedPost._id)'>SUBMIT COMMENT</button>
                </div>
                <!-- #### render comments #### -->
                <div v-for="(comment, index) in selectedPost.comments" :key='index' class='comment-box'>
                  <div :id=index class='card comment' @click='hideComment(index)'>
                    <div class="card-body">
                      <p>{{ selectedPost.comments[index] }}</p>
                      <p class='comment-time'>
                        <i>{{ index }} time</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="to-top" @click="toTop()">
            <icon name='chevron-up' scale="2"></icon>
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
      commentBody: '',
      message: ''
    }
  },
  mounted () {
    this.getPosts()
    this.likePost()
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
      $('.post-container').css({
        'display': 'block'
      })
      const response = await PostsService.selectPost(id)
      this.selectedPost = response.data.selectedPost
      var thisPost = '#' + id
      $('div.selected').removeClass('selected')
      $(thisPost).addClass('selected')
      if ($(window).width() < 768) {
        $('.sidebar').css('display', 'none')
        $('.post-container').css('display', 'block')
        $('.to-top').css('display', 'block')
      }
    },
    async addComment (id) {
      console.log(id)
      await PostsService.addComment(id, this.commentBody)
      this.message = 'Comment submitted!'
      this.$router.push({
        name: 'Main'
      })
    },
    async likePost (id) {
      const userId = this.$store.state.user._id
      console.log(id)
      var thisHeart = '#heart' + id
      console.log(thisHeart)
      const response = await PostsService.likePost(id, userId)
      const isLiked = response.data.liked
      if (isLiked === true) {
        $(thisHeart).addClass('liked')
        $(thisHeart).removeClass('not-liked')
      } else {
        $(thisHeart).addClass('not-liked')
        $(thisHeart).removeClass('liked')
      }
    },
    toTop () {
      if ($(window).width() < 768) {
        console.log('top')
        $('.sidebar').css('display', 'block')
        $('.post-container').css('display', 'none')
        $('.to-top').css('display', 'none')
      }
    },
    async hideComment (index) {

    }
  }
}
$(document).ready(function () {
  $('[data-toggle="popover"]').popover()
})

</script>

<style>
@import '../assets/css/main.css';
.message {
color: limegreen;
}

</style>
