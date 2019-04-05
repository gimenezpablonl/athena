const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.get('/join', (req,res) =>{
    res.render('users/signup');
})
router.post('/join', async (req,res) => {
    const { username, email, password} = req.body;
    const user = new User({username, email, password});
    newUser.password = await user.encryptPassword(password);
    await user.save();
    res.redirect('/login');
})
router.get('/login', (req,res) =>{
    res.render('users/signin');
})
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

module.exports = router;