const express = require('express');
const morgan = require('morgan');

//Inizilitation
const app = express();
//settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));

//Global Variables

//Routes
app.use(require('./routes/'));

//public

//starting Server

app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});