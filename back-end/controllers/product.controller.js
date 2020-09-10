const Product = require('../models/Product.Model')

async function getProducts (req, res) {
  const products = await Product.find().lean().exec()
  res.status(200).send({ products, success: true })
}

async function addProduct (req, res) {
  try {
    const {
      name,
      type,
      category,
      unitaryPrice,
      description
    } = req.body

    const product = Product({
      name,
      type,
      category,
      unitaryPrice,
      description
    })

    if (req.file) {
      const { filename } = req.file
      product.setImgUrl(filename)
    }

    const productStored = await product.save()
    res.status(200).send({ productStored, sucess: true })
  } catch (e) {
    console.log(e)
    res.status(500).send({ message: e.message, success: false })
  }
}

module.exports = {
  addProduct,
  getProducts
}
