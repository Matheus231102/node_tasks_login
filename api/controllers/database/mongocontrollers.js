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
    
    async findDocument(Parameter, userInfo) {
        try {
            const query = {}
            query[Parameter] = userInfo

            const document = await userModel.findOne(query)

            console.log({
                was_user_email_found: true
            })
            return document
        } catch (err) {
            console.log({
                was_user_email_found: false,
                error: err
            })
            throw err
        }
    }

}

const userModelClass = new Database(userModel)

module.exports = {
    userModelClass
}