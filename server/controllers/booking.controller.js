const BookingModel = require("../models/BookAppointment");
const bookingRouter = require("express").Router();

bookingRouter.post("/bookingAppointment",(req,res) =>{
    BookingModel.create(req.body)
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

bookingRouter.patch("/bookingAppointment/:id",(req,res) =>{
    const id = req.params.id
    BookingModel.findByIdAndUpdate(id, {...req.body})
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

bookingRouter.get("/bookingAppointment",(req,res) =>{
    BookingModel.find()
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

bookingRouter.get("/bookingAppointment/:email",(req,res) =>{
    BookingModel.find({email:req.params.email})
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

bookingRouter.delete("/bookingAppointment/:email",(req,res) =>{
    BookingModel.deleteOne({email:req.params.email})
        .then(results =>{
            BookingModel.find({email:req.params.email})
                .then(results => res.json(results))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})

module.exports = bookingRouter