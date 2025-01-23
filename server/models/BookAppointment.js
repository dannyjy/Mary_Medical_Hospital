const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contact: String,
    gender: String,
    doctor: String,
    date: String,
    time: String,
    completed: Boolean,
    cancelled: Boolean,
    comment: String
})

const BookingModel = mongoose.model("Bookings",BookingSchema)

module.exports = BookingModel