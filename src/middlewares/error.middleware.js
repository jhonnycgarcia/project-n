module.exports = (err, req, res, next) => {
    return res.render('error', {
        message: 'Error',
        error: {
            status: 500,
            stack: 'Internal server error'
        }
    });
}