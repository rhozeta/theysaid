
const Post = require('../models/post')

module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: 'hi ' + req.body.email + ', you have been registered'
    })
  })
  app.get('/main', (req, res) => {
    Post.find({}, 'title body _id', function (error, posts) {
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
    console.log(data)
    console.log(id)
    Post.findOneAndUpdate({_id: id}, { $push: {'comments': data} }, function(err){
      if (err) return res.status(500).send()
      return res.send('succesfully saved')
    })
  })
}