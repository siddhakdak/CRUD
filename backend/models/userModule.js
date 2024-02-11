const mongoose = require("mongoose");

// yha humne schema banaya
const userModal = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age:{
        type:Number
    },
},{timestamps: true});

// ab ye schema ko modal me convert karna hai taaki hum isme changes kr sake and ise use kr sake 

const User = mongoose.model('User', userModal);
module.exports = User;

