const { validationResult } = require('express-validator');


/**
 * Verificar la integridad de los datos enviados desde el formulario
 *  luego de ser validados por el middleware
 */
let authVerifyMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.errors.length > 0) {
        let err = {};
        errors.errors.forEach((row, index) => {
            const { value, msg, param } = row;
            err[param] = { value, msg, error: true };
        });
        req.formErrors = err;
    }
    next();
}

module.exports = {
    authVerifyMiddleware
}