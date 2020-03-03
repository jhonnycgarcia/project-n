const express = require('express');
let router = express.Router();

const { EmpleadoController } = require('../controllers');
const empleadoController = new EmpleadoController();


router.get('/list', empleadoController.getAll);

module.exports = router;