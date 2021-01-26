const express = require('express');
const patch = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override')

// Inicializacion 
const app = express();

// Settings
app.set('port',process.env.PORT || 5000);
app.set('views', patch.join( __dirname + '/views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: patch.join(app.get('views'), 'layouts'),
    partialsDir: patch.join(app.get('views'), 'partials'),
    extname: '.hbs' 
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

//Global variables 

//Routes
app.use(require('./routes/rtMain'));
app.use(require('./routes/rtCitas'));

//static files
app.use(express.static(patch.join( __dirname + 'public')));

module.exports = app;