const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req,res) => {
    const alumnos = await Student.find();
    res.json(alumnos);
})

router.post('/', async (req,res) => {
    console.log('req.body=', req.body);
    const alumno = new Student(req.body);
    await alumno.save();
    console.log(alumno);
    res.json({
        status : 'Student saved'
    });
})

router.put('/:id', async (req,res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status : 'Student updated'
    });
})

router.delete('/:id', async (req,res) =>{
    await Student.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status : 'Student removed'
    });
})
module.exports = router;