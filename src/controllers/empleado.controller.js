const { EmpleadoService } = require('../services');
let empleadoService = null;

class EmpleadoController {
    constructor() {
        empleadoService = new EmpleadoService();
    }

    async getAll(req, res, next) {
        const { pageSize, pageNumber } = req.query;
        try {
            const empleados = await empleadoService.getAll(pageSize, pageNumber);
            res.render('empleado/list', {...empleados });
            // res.json({ ok: true, err: null, data: empleados });

        } catch (err) {
            res.status(err.status).json({ ok: false, err });
        }
    }
}

module.exports = EmpleadoController;