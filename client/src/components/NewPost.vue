<template>
  <div class="posts">
    <div class="form-group container">
      <h1>Add Post</h1>
      <div>
        <input class="form-control" type="text" name="title" placeholder="Title" v-model="title">
      </div>
      <div>
        <textarea class="form-control" rows="15" cols="15" placeholder="Say something..." v-model="body"></textarea>
      </div>
      <div>
        <label for="filter">Tag:</label>
        <select id="filter" name="filter" class="form-control" required="true" v-model="tag">
          <option>Work</option>
          <option>Life</option>
        </select>
      </div>
      <div>
        <button class="btn btn-success btn-lg btn-pill" @click="addPost">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      body: '',
      tag: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        body: this.body,
        tag: this.tag
      })
      this.$router.push({
        name: 'Main'
      })
    }
  }
}

</script>

<style>
  @import '../assets/css/main.css'
</style>
