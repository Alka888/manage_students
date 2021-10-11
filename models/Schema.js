const mongoose = require('mongoose');

const reportSchema = {
    _id: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    reportType: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}

module.exports = mongoose.model('Reports', reportSchema)
