module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: 'hi ' + req.body.email + ', you have been registered'
    })
  })
}