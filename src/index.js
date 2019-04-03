const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
// SETTINGS
mongoose.connect('mongodb://localhost/athena')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
// MIDDLEWARES
app.use(morgan('dev'));
// ROUTES
// Static files
// SERVER
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})