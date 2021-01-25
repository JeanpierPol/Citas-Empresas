const express = require('express');
const patch = require('path');
const exphbs = require('express-handlebars');

// Inicializacion 
const app = express();

// Settings
app.set('port',process.env.PORT || 4000);
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

//Global variables 

//Routes
app.use(require(`./routes/rtMain`));
//static files
app.use(express.static(patch.join( __dirname + 'public')));

module.exports = app;