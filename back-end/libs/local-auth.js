const auth = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User.Model')

auth.serializeUser((user, done) => {
  done(null, user.id)
})

auth.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

auth.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) { return done(err) }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' })
    }
    user.comparePassword(password).then(res => {
      if (!res) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      return done(null, user)
    })
  })
}
))
