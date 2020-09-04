const User = require('../models/User.Model')

async function findUserByEmail (email, res){
    try {
        const user = await User.findOne(email)
        if (user) {
            return res(null, user)
        } else {
            return res(new Error(`User ${email} does not exist`))
        }        
    } catch (e) {
        res.status(500).send(e)
    }
}

async function getUser (id, res){
    const user = await User.findById(id)
    res.status(200).send({ user })
}

async function addUser (req, res){
    try {
        const {
            email,
            password
        } = req.body

        const user = User({
            email,
            password
        })

        await user.bcryptPassword(password)
        const userStored = await user.save()
        res.status(200).send({ userStored })
    } catch (e) {
        console.log(e)
        res.status(500).send({ message : e.message })
    }
}

module.exports = {
    addUser,
    getUser,
    findUserByEmail
}