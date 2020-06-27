//First we import mongoose
//import Mongoose
const mongoose = require("mongoose");

//Schema
const TransactionSchema = new mongoose.Schema({
  //Fields Name from database
  text: {
    type: String,
    trim: true,
    required: [true, "Text Required!!"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a Positive or Negative Number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
