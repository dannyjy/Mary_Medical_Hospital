const fs = require("fs");
const SignUpModel = require("../models/SignUp");
const signUpRouter = require('express').Router()

signUpRouter.post("/register",(req,res) =>{
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

module.exports = signUpRouter