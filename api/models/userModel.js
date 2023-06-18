const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    }, email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }, password: {
        type: String,
        required: true
    }, createdAt: {
        type: Date,
        default: new Date()
    }, tasks: {
        type: Array,
        default: []
    }
})

const userModel = mongoose.model('users', userSchema)

module.exports = {
    userModel
}