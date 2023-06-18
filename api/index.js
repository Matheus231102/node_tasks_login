const { userModelClass } = require('./controllers/database/mongocontrollers')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.post('/register/user', (req, res) => {
    const jsonbody = req.body
    console.log(jsonbody)
    userModelClass.createDocument(jsonbody)
    res.send('user Created')
})

module.exports = {
    app
}