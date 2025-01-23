const mongoose = require('mongoose')

const SignUpSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minLength: [4,"Password must be at least 4 characters long"],
        maxLength: 20,
        required: true
    }
})

const SignUpModel = mongoose.model("SignUp",SignUpSchema)

module.exports = SignUpModel