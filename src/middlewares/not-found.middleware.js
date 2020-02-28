module.exports = (req, res, next) => {
    return res.render('error/error', {
        message: 'Not Found',
        error: {
            status: 404,
            stack: 'Resource not found!'
        }
    });
}