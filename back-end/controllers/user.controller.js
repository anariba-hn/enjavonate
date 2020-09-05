const User = require('../models/User.Model')

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

        const userExist = await User.findOne({ 'email': email})
        if(userExist){
            res.status(201).send({ message:'User already exist.', success:false})
        }

        await user.bcryptPassword(password)
        // const userStored = await user.save()
        res.status(200).send({ user, succes:true })
    } catch (e) {
        console.log(e)
        res.status(500).send({ message : e.message, succes:false })
    }
}

module.exports = {
    addUser,
    getUser
}