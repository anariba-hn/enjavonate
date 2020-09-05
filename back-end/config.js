const config = {
    appConfig: {
        port: process.env.APP_PORT || process.env.PORT,
        host: process.env.APP_HOST
    },
    dbConfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    },
    sessionConfig: {
        key: process.env.SESSION_KEY
    }
}

module.exports = config
