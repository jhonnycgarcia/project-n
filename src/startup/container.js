const { createContainer, asClass, asValue, asFunction } = require('awilix'); // Cargar dependencias AWILIX

const {
    AuthController
} = require('../controllers');

const container = createContainer(); // -- Crear contenedor

container
    .register({
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    });

module.exports = container;