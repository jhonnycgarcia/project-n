/** 
 * Requires
 */
var createError = require('http-errors'); // Manejo de errores HTTP
const express = require('express');
const router = express.Router();


// Auth Router
router.use('/auth', require('./auth.router'));

// Home Router
router.use(require('./home.js'));

// User Routes
router.use('/users', require('./users.js'));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    next(createError(404));
});

// error handler
router.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error/error');
});

module.exports = router;