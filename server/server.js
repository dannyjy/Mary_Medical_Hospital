const express = require('express');
const cors = require('cors');
const MongoDB = require('./db')
const SignUpModel = require('./models/SignUp');
const FeedbackModel = require('./models/feedback');
const BookingModel = require('./models/BookAppointment');
const fs = require('fs');
const multer  = require('multer')
const path = require('path')

const app = express();
app.use(express.json({limit: "50mb"}));
app.get('/uploads/*', (req, res) => {
    let image = path.join("uploads", req.params[0]);
    res.sendFile(image, { root: __dirname });
})
app.use(cors({
    origin: "*"
}))

const port = 3555;

MongoDB()

app.post("/bookingAppointment",(req,res) =>{
    BookingModel.create(req.body)
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

app.patch("/bookingAppointment/:id",(req,res) =>{
    const id = req.params.id
    BookingModel.findByIdAndUpdate(id, {...req.body})
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

app.get("/bookingAppointment",(req,res) =>{
    BookingModel.find()
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

app.post("/register",(req,res) =>{
    const {name,phone,specialty,basicDetails,email,image,password} = req.body
    const base64Image = Buffer(image.split(';base64,')[1], 'base64');
    console.log(base64Image);
    const imageName = name + new Date().getTime() + ".jpg"
    fs.writeFile(`./uploads/${imageName}`, base64Image, 'base64', (err) => {
        if (err) {
            console.log(err);
        }
    })

    SignUpModel.create({name,phone,specialty,basicDetails,email,image:"/uploads/"+imageName,password})
        .then(registeration => {
            res.json(registeration)
            console.log(registeration)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

app.post('/login',(req,res) => {
    const {email,password} = req.body
    SignUpModel.findOne({email,password})
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

app.get("/bookingAppointment/:email",(req,res) =>{
    BookingModel.find({email:req.params.email})
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

app.delete("/bookingAppointment/:email",(req,res) =>{
    BookingModel.deleteOne({email:req.params.email})
        .then(results =>{
            BookingModel.find({email:req.params.email})
                .then(results => res.json(results))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})

app.post('/rescheduleAppointment', (req, res) => {
    BookingModel.findOneAndUpdate({_id:req.body.id},{$set:{date: req.body.date, time: req.body.time}})
        .then(result => {
            BookingModel.findOne({_id:req.body.id})
                .then(results => res.json(results))
                .catch(err => res.json(err))
            console.log(result)
        })
        .catch(err => res.json(err))
})

app.post('/feedback', (req,res) => {
    FeedbackModel.create(req.body)
        .then(feedback => res.json(feedback))
        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});