const mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  body: String,
  likes: {
    amount: Number,
    likedBy: [String]
  },
  tags: [String],
  comments: [String],
  published: {
    type: Date,
    default: Date.now()
  }
  })

var Post = mongoose.model('Post', PostSchema)
module.exports = Post