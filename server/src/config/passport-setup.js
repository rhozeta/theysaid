const passport = require('passport')

const passportJWT = require('passport-jwt')
const keys = require('./keys')
const User = require('../../models/user')

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

