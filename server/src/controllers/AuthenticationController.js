const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    const email = req.body.email
    const password = req.body.password
    User.findOne({
      email: email
    }, function (err, foundUser) {
      if (foundUser) {
        res.status(400).send({
          error: 'User already registered with that email'
        })
      } else {
        var new_user = new User({
          email: email,
          password: password
        })
        new_user.save(function (error) {
          if (error) {
            console.log(error)
          }
          res.send(new_user)
        })
        console.log('user created')
      }
    })
  },
  async login(req, res) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        email: email
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      user.comparePassword(password, function (err, isMatch) {
        if (isMatch && isMatch == true) {
          req.session.user = user
          const userJSON = user.toJSON()
          res.send({
            user: userJSON,
            token: jwtSignUser(userJSON)
          })
        } else {
          return res.status(401).send()
        }
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to login.'
      })
    }
  }
}