const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/posts')
mongoose.connect('mongodb://localhost:27017/users')
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

// ROUTES

require('./routes')(app)


app.listen(config.port, () => console.log(`server started on port ${config.port}`))

