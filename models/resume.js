const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resumeSchema = new Schema({
    name: String,
    lastname: String,
    age: Number
})

module.exports = mongoose.model('Resume', resumeSchema)