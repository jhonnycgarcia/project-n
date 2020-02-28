const express = require('express'); // Express Framework
const bodyParser = require('body-parser');
const path = require('path'); // Lib Path
const cookieParser = require('cookie-parser'); // Lib Cookie-Parse
const logger = require('morgan'); // Lib Morgan

const { NotFoundMiddleware } = require('../middlewares');

const Routes = require('../routes');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//  --- Parse application/x-www-form-urlencoded ---
app.use(bodyParser.urlencoded({ extended: false }));
// --- Parse application/json ---
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));



// Routes
app.get('/', (req, res, next) => res.redirect('/api/v1/auth'));
app.use('/api/v1', Routes);
// Not Found
app.use(NotFoundMiddleware);

module.exports = app;