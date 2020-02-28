/** 
 * Requires
 */
const express = require('express');
const router = express.Router(); // --- Server Router
const apiRouter = express.Router(); // --- Api router

let createError = require('http-errors'); // Manejo de errores HTTP

/**
 * Middlewares Server
 */
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // Lib Cookie-Parse
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

apiRouter // --- Server Middlewares
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(bodyParser.urlencoded({ extended: false })) //  --- Parse application/x-www-form-urlencoded ---
    .use(bodyParser.json()) // --- Parse application/json ---
    .use(cookieParser());

const { // --- Load Routes
    AuthRouter,
    HomeRouter,
    UserRouter
} = require('./index');

// --- API Routes Defined
apiRouter.get('/', (req, res, next) => res.redirect('/v1/api/auth'));
apiRouter.use('/auth', AuthRouter);
apiRouter.use('/home', HomeRouter);
apiRouter.use('/user', UserRouter);

// --- Server Routes Defined
router.get('/', (req, res, next) => res.redirect('/v1/api/auth'));
router.use('/v1/api', apiRouter);

// --- Cath 404 Error
router.use(NotFoundMiddleware);
// --- Server 500 Error
router.use(ErrorMiddleware);

module.exports = router;