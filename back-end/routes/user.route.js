const express = require('express')
const passport = require('passport')
const { addUser, getUser } = require('../controllers/user.controller')

const api = express.Router()

api.get('/', getUser)
api.post('/signup', addUser)
api.post('/singin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) return res.status(201).send({ info })
    if (user) return res.status(201).send({ user })
  })(req, res, next)
})

module.exports = api
