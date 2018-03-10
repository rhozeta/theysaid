const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passportSetup = require('./config/passport-setup')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
const passport = require('passport')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/forum')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(){
  console.log('Connection Succeeded')
})

exports.name = db
const config = require('./config/config')

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

