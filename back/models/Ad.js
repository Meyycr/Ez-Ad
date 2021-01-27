let mongoose = require('mongoose');

let Ad = mongoose.model('Ad', {
    AdId: {
        type: String,
        required: true,
        unique: true
    },
    userId : {
        type: mongoose.ObjectId,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

module.exports = Ad;