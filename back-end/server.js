require('dotenv').config()
const app = require('./app')
const {
  appConfig,
  dbConfig
} = require('./config')
const connectDb = require('./db/mongoDb')

async function InitApp (appConfig, dbConfig) {
  try {
    await connectDb(dbConfig)
    app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
  } catch (e) {
    console.log(e)
    process.exit(0)
  }
}

InitApp(appConfig, dbConfig)
