const express = require('express');
let router = express.Router();


/** 
 * Middlewares
 */
const { authVerifyMiddleware } = require('../middlewares/auth.middleware');
const { check } = require('express-validator');

/**
 * Controller
 */
const { AuthController } = require('../controllers');
const authController = new AuthController();


/** 
 * Routes
 */
router.get('/', function(req, res, next) {
    res.render('auth/signIn');
    // res.redirect('/auth/signIn');
});

router.get('/signIn', (req, res, next) => { // Render de la vista
    res.render('auth/signIn');
});

router.post('/signIn', [
    check('username').trim().escape().notEmpty().isString().isLength({ min: 6, max: 12 }),
    check('password').trim().escape().notEmpty().isString().isLength({ min: 6, max: 12 }),
    authVerifyMiddleware
], authController.signIn);

router.get('/signUp', (req, res, next) => { // Render de la vista
    res.render('auth/signUp');
});

router.post('/signUp', [ // Registrar usuario
    check('email').trim().escape().notEmpty().isEmail(),
    check('name').trim().escape().notEmpty().isString().isLength({ min: 6, max: 20 }),
    check('lastname').trim().escape().notEmpty().isString().isLength({ min: 6, max: 20 }),
    check('username').trim().escape().notEmpty().isString().isLength({ min: 6, max: 12 }),
    check('password').trim().escape().notEmpty().isString().isLength({ min: 6, max: 12 }),
    authVerifyMiddleware
], authController.signUp);

module.exports = router;