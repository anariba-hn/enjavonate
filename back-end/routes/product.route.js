const express = require('express')
const upload = require('../libs/storage')
const { addProduct, getProducts } = require('../controllers/product.controller')

const api = express.Router()

api.get('/', getProducts)
api.post('/newProduct',  upload.single('image'), addProduct)


module.exports = api
