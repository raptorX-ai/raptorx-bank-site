const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  panCard: String,
  aadhaar:  { type: Number, unique: true },
  address: String,
  pincode: Number,
  accountNumber: { type: Number, unique: true },
  balance: { type: Number, default: 0 },
  transactions: [
    {
      type: { type: String },
      amount: Number,
      date: { type: Date, default: Date.now },
    },
  ],
  otp: String,
  otpExpires: Date,
});

module.exports = mongoose.model('User', userSchema);
