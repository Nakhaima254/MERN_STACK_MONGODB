//Connect to MongoDB using Mongoose

const mongoose = require('mongoose'); //commonjs Module
require('dotenv').config(); //import and configure dotenv

async function connectDB() {
  await mongoose.connect(process.env.MONGODBATLAS_URI);
  console.log("Connected to MongoDB");
  
}

module.exports = {connectDB; mongoose}
