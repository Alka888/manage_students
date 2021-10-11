const express = require('express');
const router = express.Router();
const Reports = require("../models/Schema");

router.route("/reports").post((req, res) => {
    const id = req.body.id;
    const state = req.body.state;
    const reportType = req.body.reportType;
    const message = req.body.message;
    const newRep = new Reports({
        id,
        state,
        reportType,
        message
    });

    newRep.save();
})

router.route("/reportdashboard").get((req, res) => {
    Reports.find()
        .then(foundReps => res.json(foundReps))
})

router.route('/delete' + '/:id').delete((req, res) => {
    Reports.findOneAndDelete ({ id: "id" }, (err) => {
        if (!err) {
            console.log("report deleted");
        } else {
           console.log("report not found");
        }
    })
})

router.route('/put' + '/:id').put((req, res) => {
    const updatedRep = {
        id: req.body.id,
        state: req.body.state,
        reportType: req.body.reportType,
        message: req.body.message
    }
    
    Reports.findOneAndUpdate(
        {id: req.params.id }, 
        {$set: updatedRep}, 
        (req, res, err) => {
        if (!err) {
            console.log("report updated");
        } else {
            console.log(err);
        }
    })
})



module.exports = router;


