const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')
const User = require('../../models/user')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy({
    // options for google strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/login/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}).then((currentUser) => {
      if (currentUser) {
        console.log('strat')
        console.log('logged in as: ' + currentUser.googleId)
        done(null, currentUser)
      } else {
        new User({
          name: profile.displayName,
          googleId: profile.id
        }).save().then((newUser) => {
          console.log('new user created ' + newUser)
          done(null, newUser)
        })
      }
    })
  })
)