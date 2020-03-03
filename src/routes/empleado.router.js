const express = require('express');
let router = express.Router();

const { EmpleadoController } = require('../controllers');
const empleadoController = new EmpleadoController();


router.get('/list', empleadoController.getAll);
router.get('/registre', (req, res, next) => { res.render('empleado/addEmpleado') });

module.exports = router;