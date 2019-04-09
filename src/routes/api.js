const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Headmaster = require('../models/Headmaster');
const Classroom = require('../models/Classroom');
const Asignature = require('../models/Asignature');
const User = require('../models/User');
const router = express.Router();

/* USERS */
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


/* STUDENTS */

router.post('/api/students/get', async (req, res) =>{
    const {username} = req.body;
    console.log(username, 'requested the list of students');
    const students = await Student.find();
    res.json(students);
})

router.post('/api/students/post', async (req, res) =>{
    const { record_number, name, last_name, dni } = req.body;
    const student = new Student({record_number, name, last_name, dni});
    await student.save();
    res.json({
        'msg': 'student created successfully',
        'student': student
    })
})

router.put('/api/students/put/:id', async (req,res) =>{
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        'msg' : '/api/students/put successful',
    })
})

router.delete('/api/students/delete/:id' , async (req,res) => {
    await Student.findByIdAndRemove(req.params.id);
    res.json({
        'msg' : '/api/students/delete successful'
    })
})

/* PROFESSOR */

router.post('/api/professors/get', async (req, res) =>{
    const {username} = req.body;
    console.log(username, 'requested the list of professors');
    const professors = await Professor.find();
    res.json(professors);
})

router.post('/api/professors/post', async (req, res) =>{
    const { record_number, name, last_name, dni, classroom_list } = req.body;
    const professor = new Professor({record_number, name, last_name, dni, classroom_list});
    await professor.save();
    res.json({
        'msg': 'professor created succesufully',
        'professor': professor
    })
})

router.put('/api/professors/put/:id', async (req,res) =>{
    await Professor.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        'msg' : '/api/professors/put successful'
    })
})

router.delete('/api/professors/delete/:id' , async (req,res) => {
    await Professor.findByIdAndRemove(req.params.id);
    res.json({
        'msg' : '/api/professors/delete successful'
    })
})

/* HEADMASTER */

/* CLASSROOM */

/* ASIGNATURE */