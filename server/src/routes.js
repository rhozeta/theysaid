
const Post = require('../models/post')
const User = require('../models/user')

module.exports = (app) => {
  app.post('/login', (req) => {
    const email = req.body.email
    const password = req.body.password
    console.log(password)
    User.find({email: email}, function(err, user) {
      console.log(user.password)
      if (err) {
        console.log(err)
      } else {
        if (password == user.password) {
          console.log('match')
        } else {
          console.log('user not found')
        }
      }
    })
  })

  app.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    console.log(email)
    console.log(password)
    var new_user = new User ({
      email: email,
      password: password
    })
    new_user.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'User created!'
      })
      console.log('user created')
    })
  })

  app.get('/main', (req, res) => {
    Post.find({}, function (error, posts) {
      if (error) {
        console.error(error)
      }
      res.send({
        posts: posts
      })
    }).sort({
      _id: -1
    })
  })

  app.get('/main/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Post.findById(id, function(error, foundData) {
      if (error) {
        console.log(error)
      } else {
        res.send({
          selectedPost: foundData
        })
      }
    }
    )})

  app.post('/main', (req, res) => {
    //var db = req.db
    var title = req.body.title
    var body = req.body.body
    var new_post = new Post({
      title: title,
      body: body
    })
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post submitted!'
      })
    })
  })

  app.put('/main/:id', function(req, res) {
    console.log('new comment route hit')
    const id = req.params.id
    const data = req.body.commentBody
    const choice = req.body.choice
    console.log(choice)
    console.log(data)
    console.log(id)
    if (data) {
      Post.findOneAndUpdate({_id: id}, { $push: {'comments': data} }, function(err){
        if (err) return res.status(500).send()
        return res.send('succesfully saved')
      })
    } else {
      console.log(choice)
      Post.findOneAndUpdate({_id: id}, { $inc: {'likes': choice} }, function(err){
        if (err) return res.status(500).send()
        return res.send('succesfully like/disliked')
      })
    }
  })

}