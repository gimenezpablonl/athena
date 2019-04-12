const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const methodOverride = require("method-override");  
const session = require("express-session")
const exphbs = require("express-handlebars");
const path = require("path");
const passport = require("passport");


const app = express();
// SETTINGS
require('./config/passport');
app.set('port', process.env.PORT || 3000);
mongoose.connect('mongodb://localhost/athena', {useCreateIndex: true,useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
    var jwtkey = 'clave';
// MIDDLEWARES
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'asdf',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
// GLOBAL VARIABLES
// ROUTES
app.use('/', require('./routes/api'));
app.use('/', require('./routes/admin'));
app.use('/config',passport.authenticate('jwt', {session:false}), require('./routes/root'));
// STATIC FILES
app.use(express.static(__dirname + '/public'));
// SERVER
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})