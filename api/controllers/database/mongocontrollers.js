const { userModel } = require('../../models/userModel')

class Database {
    constructor(databaseModel) {
        this._databaseModel = databaseModel
    }

    async createDocument(documentToCreate) {
        try {
            await userModel.create(documentToCreate)
            console.log({
                was_user_created: true
            })
        } catch (err) {
            console.log({
                was_user_created: false
            })
        }
    }
}

const userModelClass = new Database(userModel)

module.exports = {
    userModelClass
}