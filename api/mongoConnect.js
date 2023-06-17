const mongoose = require('mongoose')
const databaseName = 'to_do_node'
const connectionString = `mongodb://127.0.0.1:27017/${databaseName}`

async function connectToDatabase(str) {
    try {
        await mongoose.connect(str)

        console.log({
            mongo_status_connection: true
        })
    } catch (err) {
        console.log({
            mongo_status_connection: false,
            error: err
        })
    }
}

module.exports = {
    connectToDatabase, connectionString
}

