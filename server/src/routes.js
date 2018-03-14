const Post = require('../models/post')
const User = require('../models/user')
const passport = require('passport')
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {

  app.post('/login', AuthenticationController.login)
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

  app.get('/main', passport.authenticate('jwt', { session: false }), (req, res) => {
    Post.find({}, function (error, posts) {
      if (error) {
        console.error(error)
      }
      res.send({
        posts: posts
      })
    })
  })

  app.get('/main/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Post.findById(id, function (error, foundData) {
      if (error) {
        console.log(error)
      } else {
        res.send({
          selectedPost: foundData
        })
      }
    })
  })

  app.post('/main', (req, res) => {
    //var db = req.db
    var title = req.body.title
    var body = req.body.body
    var tags = req.body.tag
    var new_post = new Post({
      title: title,
      body: body,
      tags: tags
    })
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      console.log('post submitted')
      res.send({
        success: true,
        message: 'Post submitted!'
      })
    })
  })

  app.put('/main/:id', function (req, res) {
    console.log('new comment route hit')
    const id = req.params.id
    const data = req.body.commentBody
    const userId = req.body.userId
    console.log(userId)
    console.log(data)
    if (data) {
      Post.findOneAndUpdate({
        _id: id
      }, {
        $push: {
          'comments': data
        }
      }, function (err) {
        if (err) return res.status(500).send()
        return res.send({
          message: 'Comment submitted!'
        })
      })
    } else {
      const likedBy = Post.findOne({
        _id: id,
        likes: userId
      }).then(post => {
        console.log(post)
        //This should return the post or null
        if (post == null) {
          Post.findOneAndUpdate({
            _id: id
          }, {
            $addToSet: {
              likes: userId
            }
          }, function (err) {
            if (err) {
              return res.status(500).send({
                message: 'could not add post to saved',
                error: err
              })
            } else {
              return res.status(200).send({
                message: 'Liked post',
                liked: true
              })
            }
          })
        } else {
          Post.findOneAndUpdate({
            _id: id
          }, {
            $pull: {
              likes: userId
            }
          }, function (err) {
            if (err) {
              res.status(500).send({
                message: 'and error occured',
              })
            } else {
              res.status(200).send({
                message: 'Post unliked.',
                liked: false
              })
            }
          })
        }
      })
    }
  })
}