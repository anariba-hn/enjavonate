const User = require('../models/User.Model')

async function getUser (req, res){
    const user = await User.find()
    res.status(200).send({ user, success:true })
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
            return res.status(201).send({ message:'User already exist.', success:false})
        }

        await user.bcryptPassword(password)
        const userStored = await user.save()
        res.status(200).send({ userStored, succes:true })
    } catch (e) {
        console.log(e)
        res.status(500).send({ message : e.message, succes:false })
    }
}

module.exports = {
    addUser,
    getUser
}
