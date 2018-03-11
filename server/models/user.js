const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const Post = require('./post')
var Schema = mongoose.Schema
var SALT_WORK_FACTOR = 10

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  googleId: String,
  posts: [String],
  liked: [String],
  disliked: [String]
})

UserSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback (err)
    callback(undefined, isMatch)
  })
}

var User = mongoose.model('User', UserSchema)
module.exports = User