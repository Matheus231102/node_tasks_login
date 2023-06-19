const express = require('express')
const path = require('path')
const cors = require('cors')

const { userModelClass } = require('./controllers/database/mongocontrollers.js')
const { HashClass } = require('./controllers/hash/hashcontrollers.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; font-src 'self'")
})

app.get('/register', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, '/public/register.html'))
})

app.get('/login', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, '/public/login.html'))
})

app.get('/js/register.js', (req, res) => {
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname, 'public', 'js', 'register.js'))
})

app.get('/js/login.js', (req, res) => {
    res.set('Content-Type', 'text/javascript')
    res.sendFile(path.join(__dirname, 'public', 'js', 'login.js'))
})

// página não está sendo renderizada automaticamente
app.get('/mainpage', (req, res) => {
    res.render('taskpage',
        {
            userTasks: ["teste"],
            userName: "testando"
        })
})

app.post('/register/user', async (req, res) => {
    const jsonbody = req.body
    try {
        jsonbody.password = await HashClass.hashInfo(jsonbody.password)
    } catch (err) {
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
            res.send('teste')
        } else {
            throw new Error('senha incorreta!')
        }
    } catch (error) {
        console.log({
            error: 'Ocorreu um erro!'
        })
    }
    res.end()
})


module.exports = {
    app
}