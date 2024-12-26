const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema({

    username: { type: String },
    email: { type: String },
    password: { type: String },
    number: { type: Number }

})

const User = mongoose.model("user", userschema)
module.exports = User