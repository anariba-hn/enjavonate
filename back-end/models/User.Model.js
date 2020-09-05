const mongoose = require('mongoose')
const { appConfig } = require('../config')
const bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema

const UserSchema = Schema({
    email: String,
    password: String,
    name: String,
    address: String,
    phone: String,    
}, {
    timestamp: true
})

UserSchema.methods.bcryptPassword = async function bcryptPassword(pw){
    const pwHashed = await bcrypt.hashSync(pw, bcrypt.genSaltSync(10))
    return this.password = pwHashed;
}

UserSchema.methods.comparePassword = async function comparePassword(pw){
    const matched = await bcrypt.compareSync(pw, this.password);
    return matched
}

module.exports = mongoose.model('User', UserSchema)
