const express = require('express'); // Express Framework
const path = require('path'); // Lib Path
const logger = require('morgan'); // Lib Morgan

const Routes = require('../routes/index.router');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../../public')));

app.use(Routes); // --- Routes 

module.exports = app;