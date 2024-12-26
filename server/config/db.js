const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/job")
        console.log("Connect To The Database !!");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = dbconnect;