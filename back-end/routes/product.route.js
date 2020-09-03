const express = require('express')
const upload = require('../libs/storage')
const { addProduct, getProducts } = require('../controllers/product.controller')

const api = express.Router()

api.get('/product', getProducts)
api.post('/product',  upload.single('image'), addProduct)


module.exports = api