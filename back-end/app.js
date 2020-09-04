const express = require('express')
const bodyParser = require('body-parser')
const productRoute = require('./routes/product.route')
const userRoute = require('./routes/user.route')

const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1/api', productRoute)
app.use('/v1/api', userRoute)

module.exports = app
