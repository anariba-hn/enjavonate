const express = require('express')
const { addUser, getUser } = require('../controllers/user.controller')

const api = express.Router()

api.get('/get', getUser)
api.post('/user', addUser)

module.exports = api