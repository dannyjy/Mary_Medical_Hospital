const express = require('express');
const cors = require('cors');
const MongoDB = require('./db')
const path = require('path')
const loginRouter = require('./controllers/login.controller');
const signUpRouter = require('./controllers/signUp.controller');
const bookingRouter = require('./controllers/booking.controller');
const rescheduleRouter = require("./controllers/reschedule.controller");
const feedbackRouter = require("./controllers/feedback.controller");

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

app.post("/bookingAppointment",bookingRouter);

app.patch("/bookingAppointment/:id",bookingRouter);

app.get("/bookingAppointment",bookingRouter);

app.get("/bookingAppointment/:email",bookingRouter);

app.delete("/bookingAppointment/:email",bookingRouter);

app.post('/rescheduleAppointment', rescheduleRouter);

app.post("/register",signUpRouter);

app.post('/login',loginRouter);

app.post('/feedback',feedbackRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});