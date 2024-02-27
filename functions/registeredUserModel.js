const mongoose = require("mongoose");

// Define schema
const registeredUserSchema = new mongoose.Schema({
    phoneNumber: String,
    Name: String, 
    Addresses: [
        {
          Address_details: String,
        },
      ],
 
});


const RegisteredUser = mongoose.model("RegisteredUser", registeredUserSchema);

module.exports = RegisteredUser;
