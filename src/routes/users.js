const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req,res) => {
    const { username, email, password} = req.body;
    const user = new User({username, email, password});
    user.password = await user.encryptPassword(password);
    user.record_number = 0;
    await user.save();
    res.redirect('/login');
})
  router.post('/login', function (req, res, next) {

    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(err);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            const user_token = user.toJSON();
            delete user_token.password;
            const token = jwt.sign(JSON.stringify(user_token), 'your_jwt_secret'
            );
            return res.json({user_token, token});
        });
    })
    (req, res);

});


router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
module.exports = router;