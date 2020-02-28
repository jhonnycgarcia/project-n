module.exports = (req, res, next) => {
    return res.render('error/error', {
        message: 'NotFoundError',
        error: {
            status: 404,
            stack: 'Resource not found!'
        }
    });
}