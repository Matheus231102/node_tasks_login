const express = require('express')
const cors = require('cors')

const { userModelClass } = require('./controllers/database/mongocontrollers')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static('public'))

app.post('/register/user', (req, res) => {
    const jsonbody = req.body
    console.log(jsonbody)
    userModelClass.createDocument(jsonbody)
    res.send('user Created')
})

module.exports = {
    app
}