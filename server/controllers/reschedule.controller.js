const BookingModel = require("../models/BookAppointment");
const rescheduleRouter = require("express").Router();

rescheduleRouter.post('/rescheduleAppointment', (req, res) => {
    BookingModel.findOneAndUpdate({_id:req.body.id},{$set:{date: req.body.date, time: req.body.time}})
        .then(result => {
            BookingModel.findOne({_id:req.body.id})
                .then(results => res.json(results))
                .catch(err => res.json(err))
            console.log(result)
        })
        .catch(err => res.json(err))
})

module.exports = rescheduleRouter