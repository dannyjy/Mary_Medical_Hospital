const mongoose = require('mongoose')


const SignUpSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const SignUpModel = mongoose.model("SignUp",SignUpSchema)

module.exports = SignUpModel