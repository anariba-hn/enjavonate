const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {
  sessionConfig
} = require('./config')
const productRoute = require('./routes/product.route')
const userRoute = require('./routes/user.route')

const app = express()
require('./libs/local-auth')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(session({
  secret: sessionConfig.key,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1/api/product', productRoute)
app.use('/v1/api/user', userRoute)

module.exports = app
