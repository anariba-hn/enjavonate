const express = require('express')
const bodyParser = require('body-parser')
const productRoute = require('./routes/product.route')

const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1/api', productRoute)

module.exports = app
