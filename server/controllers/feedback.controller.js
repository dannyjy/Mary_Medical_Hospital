const FeedbackModel = require("../models/feedback");
const feedbackRouter = require("express").Router();

feedbackRouter.post('/feedback', (req,res) => {
    FeedbackModel.create(req.body)
        .then(feedback => res.json(feedback))
        .catch(err => res.json(err))
})

module.exports = feedbackRouter