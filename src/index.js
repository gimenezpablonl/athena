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
mongoose.connect('mongodb://localhost/athena', {useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
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
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
  });
// ROUTES
app.use('/', require('./routes/index'));
app.use('/', require('./routes/users'));
app.use('/config', require('./routes/root'));
// STATIC FILES
app.use(express.static(__dirname + '/public'));
// SERVER
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})