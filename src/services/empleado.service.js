const { EmpleadoModel } = require('../models');
let empleadoModel = null;

class EmpleadoService {
    constructor() {
        empleadoModel = new EmpleadoModel();
    }

    async getCount() {

    }

    async getAll(pageSize, pageNumber) {
        return await empleadoModel.getAll(pageSize, pageNumber);
    }
}

module.exports = EmpleadoService;