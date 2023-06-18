const { app } = require('./api/index')
const { MongoConnection, connectionString } = require('./api/mongoConnect')
const PORT = process.env.PORT || 9999

const databaseInstance = new MongoConnection(connectionString)

async function start() {
    try {
    
        databaseInstance.connect()
            .then(() => {
                console.log({
                    mongo_status_connection: true
                })
            })
            .catch((err) => {
                console.log({
                    mongo_status_connection: true,
                    error: err
                })
            })

        app.listen(PORT, (err) => {
            if (err) {
                console.log({
                    server_status_connection: false
                })
                return
            }
            console.log({
                PORT,
                server_status_connection: true 
            })
            
        })
    } catch (err) {
        console.log({
            err_function: "start doesn't work",
            error: err
        })
    }
}

start()