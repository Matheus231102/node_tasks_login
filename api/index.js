const express = require('express')

const app = express()

app.get('/teste', (req, res) => {
    res.send('teste')
})

module.exports = {
    app
}