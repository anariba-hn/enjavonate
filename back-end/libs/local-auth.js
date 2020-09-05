const auth = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User.Model')

auth.serializeUser((user, done) => {
    done(null, user.id);
})

auth.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user);
})

auth.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (email, password, done) => {
    const user = await User.findOne(email)
    if (!user) {
        return done(null, false)
    } else {
        const match = await User.comparePassword(password)
        if(!match){
            return done(null, false)
        }
        return done(null, user)
    }
}))
