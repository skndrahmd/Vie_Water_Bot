const mongoose = require("mongoose");

// Define schema
const sessionSchema = new mongoose.Schema({
  phoneNumber: String,
  state: String,
  language: String,
  name: String, 
  address: String,
  delivery_date: String,
  time_zone: String,
  cart: [
    {
      item: String,
      price: Number,
      quantity: Number,
      total_price: {
        type: Number,
        default: function () {
          return this.price * this.quantity;
        },
      },
    },
  ],
  total_bill: Number,
  registered_User: Boolean,
  alternate_contact: {
    name: String,
    phoneNumber: String,
  }
});

// Set total_price to price x quantity on save
sessionSchema.pre("save", function (next) {
  this.cart.forEach((item) => {
    item.total_price = item.price * item.quantity;
  });
  this.total_bill = 0;
  this.cart.forEach((item) => {
    this.total_bill += item.total_price;
  })
  
   // Check if total_bill is greater than 20,000
   if (this.total_bill > 20000) {
    const error = new Error("Total bill exceeds the limit of 20,000 SAR.");
    return next(error); // Pass the error to the next middleware
  }

  next();

});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
