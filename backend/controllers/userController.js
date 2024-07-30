const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const transporter = require('../utils/emailTransporter');

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is ${otp}. It will expire in 10 minutes.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).send({ error: 'Failed to send email' });
      } else {
        console.log('Email sent successfully:', info.response); // Log success
        res.send({ message: 'OTP sent to your email' });
      }
    });
  } catch (error) {
    console.error('Error in /forgotpassword route:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ email, otp });
    if (!user || user.otpExpires < Date.now()) {
      return res.status(400).send({ error: 'Invalid or expired OTP' });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();
    res.send({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, aadhaar, panCard, address, pincode, accountNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ firstName, lastName, email, password: hashedPassword, aadhaar, panCard, address, pincode, accountNumber });

  try {
    await user.save();
    res.status(201).send({ message: 'Account created successfully' });
  } catch (error) {
    res.status(400).send({ error: 'User account already exists' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ error: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ error: 'Invalid email or password' });

  const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
  res.send({ token, user });
};

exports.addMoney = async (req, res) => {
  const { userId, amount } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ error: 'User not found' });

  user.balance += amount;
  user.transactions.push({ type: 'Credit', amount });
  await user.save();

  res.send(user);
};

exports.sendMoney = async (req, res) => {
  const { senderId, receiverEmail, amount } = req.body;

  const sender = await User.findById(senderId);
  const receiver = await User.findOne({ email: receiverEmail });

  if (!sender || !receiver) return res.status(404).send({ error: 'User not found' });
  if (sender.balance < amount) return res.status(400).send({ error: 'Insufficient balance' });

  sender.balance -= amount;
  receiver.balance += amount;

  sender.transactions.push({ type: 'Debit', amount });
  receiver.transactions.push({ type: 'Credit', amount });

  await sender.save();
  await receiver.save();

  res.send({ sender, receiver });
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// exports.getBalance = async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json({ balance: user.balance });
//   } catch (error) {
//     console.error('Error fetching balance:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };