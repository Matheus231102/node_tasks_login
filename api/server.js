const { app } = require('./index')
const { connectToDatabase, connectionString } = require('./mongoConnect')
const PORT = process.env.PORT || 9999

async function start() {
    try {
        await connectToDatabase(connectionString)

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