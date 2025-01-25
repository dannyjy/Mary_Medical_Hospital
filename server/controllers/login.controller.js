const SignUpModel = require("../models/SignUp");
const loginRouter = require('express').Router();

loginRouter.post('/login',(req,res) => {
    const {email,password} = req.body
    SignUpModel.findOne({email,password})
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

module.exports = loginRouter