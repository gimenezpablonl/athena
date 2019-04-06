const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.get('/signup', (req,res) =>{
    res.render('users/signup');
})
router.post('/signup', async (req,res) => {
    const { username, email, password} = req.body;
    const user = new User({username, email, password});
    user.password = await user.encryptPassword(password);
    user.position = 0;
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

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
module.exports = router;