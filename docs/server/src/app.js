const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
const passport = require('passport')
const mongoose = require('mongoose')
const passportJWT = require('passport-jwt')
const config = require('./config/config')
const User = require('../models/user')
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


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'theysaidnmlmlm'
opts.issuer = 'accounts.theysaid.co'
opts.audience = 'theysaid.co'
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  User.findById({id: jwt_payload.id}, function(err, user) {
    if (err) {
      return done(err, false)
    }
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
}))



mongoose.connect('mongodb://localhost:27017/forum')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(){
  console.log('Connection Succeeded')
})

exports.name = db
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

// ROUTES

require('./routes')(app)


app.listen(config.port, () => console.log(`server started on port ${config.port}`))

