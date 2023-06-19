const { userModel } = require('../../models/userModel')

class Database {
    constructor(databaseModel) {
        this._databaseModel = databaseModel
    }

    async createDocument(documentToCreate) {
        try {
            await userModel.create(documentToCreate)
        } catch (err) {
            console.log({
                error: err
            })
        }
    }
    
    async findDocument(Parameter, userInfo) {
        try {
            const query = {}
            query[Parameter] = userInfo

            const document = await userModel.findOne(query)
            return document
        } catch (err) {
            throw err
        }
    }

}

const userModelClass = new Database(userModel)

module.exports = {
    userModelClass
}