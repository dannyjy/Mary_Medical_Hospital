const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const FeedbackModel = mongoose.model("Feedback",FeedbackSchema)

module.exports = FeedbackModel