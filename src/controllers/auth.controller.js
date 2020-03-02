const { AuthService } = require('../services');
const { validationResult } = require('express-validator');
// const authService = new AuthService();
let authService = null;


class AuthController {

    constructor() {
        authService = new AuthService();
    }

    /**
     * Autenticar usuario
     */
    signIn(req, res) {
        const { body, formErrors } = req;
        const vError = validationResult(req);
        if (vError.errors.length > 0) {
            let data = { // Formatear la data para devolverla al formulario
                username: {
                    value: body.username,
                    msg: (formErrors.username) ? formErrors.username.msg : '',
                    error: (formErrors.username) ? formErrors.username.error : false
                },
                password: {
                    value: '',
                    msg: (formErrors.password) ? formErrors.password.msg : '',
                    error: (formErrors.password) ? formErrors.password.error : false
                },
            }
            res.render('auth/signIn', data); // renderizar vista adaptada
            return;
        }
        res.json({ ok: true, message: 'signIn function AuthController', data: {...body } });
        // authService.logIn(body, (err, result) => {
        //     if (err) {
        //         res.status(500).json({ ok: false, error: { message: err } });
        //     }
        //     // console.log(result);
        //     res.json({
        //         ok: true,
        //         error: {},
        //         data: result
        //             // data: result.rows
        //     });
        // });
        // res.json({ message: 'logIn function AuthController', data: {...body } });
    }

    /**
     * Registrar usuario
     */
    signUp(req, res) {
        const { body, formErrors } = req;
        const vError = validationResult(req);
        if (vError.errors.length > 0) {
            let data = { // Formatear la data para devolverla al formulario
                email: {
                    value: body.email,
                    msg: (formErrors.email) ? formErrors.email.msg : '',
                    error: (formErrors.email) ? formErrors.email.error : false
                },
                name: {
                    value: body.name,
                    msg: (formErrors.name) ? formErrors.name.msg : '',
                    error: (formErrors.name) ? formErrors.name.error : false
                },
                lastname: {
                    value: body.lastname,
                    msg: (formErrors.lastname) ? formErrors.lastname.msg : '',
                    error: (formErrors.lastname) ? formErrors.lastname.error : false
                },
                username: {
                    value: body.username,
                    msg: (formErrors.username) ? formErrors.username.msg : '',
                    error: (formErrors.username) ? formErrors.username.error : false
                },
                password: {
                    value: body.password,
                    msg: (formErrors.password) ? formErrors.password.msg : '',
                    error: (formErrors.password) ? formErrors.password.error : false
                },
            }
            res.render('auth/signUp', data); // renderizar vista adaptada
            return;
        }
        res.json({ ok: true, message: 'signUp function AuthController', data: {...body } });
    }
}

module.exports = AuthController;