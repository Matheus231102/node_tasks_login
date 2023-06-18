const mongoose = require('mongoose')

const databaseName = 'to_do_node'
const connectionString = `mongodb://127.0.0.1:27017/${databaseName}`

class MongoConnection {
    constructor(connectionString) {
        this._connectionString = connectionString;
    }

    async connect() {
        return mongoose.connect(this._connectionString)
    }

}

module.exports = {
    MongoConnection, connectionString
}

