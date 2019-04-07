const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Student = require('../models/Student');
const Professor = require('../models/Professor');

router.get('/administration', async (req, res) => {
  res.json('adm');
})
module.exports = router;