const Post = require('../models/post')

module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: 'hi ' + req.body.email + ', you have been registered'
    })
  })
  
  app.get('/main', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
      if (error) { console.error(error) }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })
  app.post('/main', (req, res) => {
    //var db = req.db
    var title = req.body.title
    var body = req.body.body
    var new_post = new Post ({
      title: title,
      body: body
    })
  
    new_post.save(function (error) {
      if(error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post submitted!'
      })
    })
  })
  

}
