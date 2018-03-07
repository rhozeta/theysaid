const mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  body: String,
  likes: Number,
  tags: [String],
  comments: {
    comment: {
      body: [String],
      likes: Number
    }
  },
  published: {
    type: Date,
    default: Date.now
  }
})

var Post = mongoose.model('Post', PostSchema)
module.exports = Post