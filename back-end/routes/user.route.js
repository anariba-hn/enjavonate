const express = require('express')
const passport = require('passport')
const { addUser, getUser } = require('../controllers/user.controller')

const api = express.Router()

api.get('/user', getUser)
api.post('/user/signup', addUser)

module.exports = api
