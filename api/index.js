const express = require('express')
const cors = require('cors')

const { userModelClass } = require('./controllers/database/mongocontrollers')
const { HashClass } = require('./controllers/hash/hashcontrollers')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static('public'))

app.post('/register/user', async (req, res) => {
    const jsonbody = req.body
    try {
        jsonbody.password = await HashClass.hashInfo(jsonbody.password)
    } catch(err) {
        console.log({
            error: 'ocorreu um erro ao fazer o hash'
        })
    }
    console.log(jsonbody)
    userModelClass.createDocument(jsonbody)
    res.send('user Created')
})

app.post('/login/user', (req, res) => {
    const jsonbody = req.body
    console.log(jsonbody)
    res.send('teste')
})

module.exports = {
    app
}