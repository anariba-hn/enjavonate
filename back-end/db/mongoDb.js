const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log('Db Connected ...'))

async function connectDb ({ port, host, dbName }){
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser:true, useUnifiedTopology:true })
}

module.exports = connectDb