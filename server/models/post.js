const mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  body: String,
  likes: Number,
  tags: [String],
  comments: [String]
  })

var Post = mongoose.model('Post', PostSchema)
module.exports = Post