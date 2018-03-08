const mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  email: String,
  password: String,
  posts: [String],
  liked: [String],
  disliked: [String]
})

var User = mongoose.model('User', UserSchema)
module.exports = User