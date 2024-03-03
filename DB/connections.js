const mongoose = require('mongoose');

const URI = "mongodb+srv://cse341-api:7Mwathani77@cluster0.u9kddnv.mongodb.net/";

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected..!');
}

module.exports = connectDB;
