const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    type: String,
    category: String,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgUrl(filename){
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Product', ProductSchema)
