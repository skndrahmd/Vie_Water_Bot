const mongoose = require('mongoose');

async function connectToDb() {
    try {
      await mongoose.connect(
        "mongodb+srv://vive:vive123@cluster0.qpbsecm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
      console.log("Connected to db");
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = connectToDb;