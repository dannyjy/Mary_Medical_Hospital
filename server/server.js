const express = require('express');
const cors = require('cors');
const MongoDB = require('./db')
const SignUpModel = require('./models/SignUp');
const FeedbackModel = require('./models/feedback');
const BookingModel = require('./models/BookAppointment');

const app = express();
app.use(express.json())
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
app.get("/bookingAppointment",(req,res) =>{
    BookingModel.find()
        .then(booking => res.json(booking))
        .catch(err => res.json(err))
})

app.post("/register",(req,res) =>{
    SignUpModel.create(req.body)
        .then(registeration => {
            res.json(registeration)
            console.log(registeration)
        })
        .catch(err => {
            console.log(err)
        res.json(err)
        })
})
app.get("/register",(req,res) =>{
    SignUpModel.find()
        .then(booking => res.json(booking))
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