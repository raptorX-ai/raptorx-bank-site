const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/forgotpassword', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/addmoney', userController.addMoney);
router.post('/sendmoney', userController.sendMoney);
router.get('/user/:email', userController.getUser);
//router.get('/balance/:userId', userController.balance);

module.exports = router;
 