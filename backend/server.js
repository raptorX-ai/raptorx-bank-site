const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://raptorx-bank:raptox-bank@raptorx-bank.ducjsj0.mongodb.net/bank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  panCard: String,
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

const User = mongoose.model('User', userSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'enter-your-mail@gmail.com', 
    pass: 'enter app password', // Enter app password get that from google account -> security -> app password -> genertae password.
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('Error verifying transporter:', error);
  } else {
    console.log('Transporter is ready to send messages:', success);
  }
});

app.post('/forgotpassword', async (req, res) => {
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
      from: 'enter-your-mailid@gmail.com',
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
});

app.post('/reset-password', async (req, res) => {
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
});

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, panCard } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ firstName, lastName, email, password: hashedPassword, panCard });

  try {
    await user.save();
    res.status(201).send({ message: 'User created' });
  } catch (error) {
    res.status(400).send({ error: 'User already exists' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ error: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ error: 'Invalid email or password' });

  const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
  res.send({ token, user });
});

app.post('/addmoney', async (req, res) => {
  const { userId, amount } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ error: 'User not found' });

  user.balance += amount;
  user.transactions.push({ type: 'Credit', amount });
  await user.save();

  res.send(user);
});

app.post('/sendmoney', async (req, res) => {
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
});


app.get('/userdetails/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email }).select('firstName lastName email balance');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// app.get('/balance', (req, res) => {
//   const balance = 1000; // Replace this with your logic to get the actual balance
//   res.json({ balance });
// });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
