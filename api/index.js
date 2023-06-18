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

app.post('/login/user', async (req, res) => {
    const jsonbody = req.body
    try {
        const document = await userModelClass.findDocument('email', `${jsonbody.email}`)
        const booleanResult = await HashClass.compareHash(jsonbody.password, document.password)
        if (booleanResult) {
            // encaminhar para um pagina renderizada com suas tasks
        } else {
            throw new Error('senha incorreta!')
        }
    } catch (error) {
        console.log({
            error: 'Ocorreu um erro!'
        })
    }
    res.send('teste')
})

module.exports = {
    app
}