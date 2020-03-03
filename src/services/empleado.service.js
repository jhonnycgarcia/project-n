const { EmpleadoModel } = require('../models');
const { ValidationError } = require('../helpers/errorsHandlers.helper');
let empleadoModel = null;

class EmpleadoService {
    constructor() {
        empleadoModel = new EmpleadoModel();
    }

    async getCount() {}

    async getAll(pageSize = 5, pageNumber = 1) {
        const totalPages = await empleadoModel.getTotalPagesNumber(pageSize);
        if (pageNumber > totalPages) { throw new ValidationError('pageNumber is invalid', 400); }
        return await empleadoModel.getAll(pageSize, pageNumber);
    }

    async getById(id) {
        if (!id || id === 0) { throw new ValidationError('id must be sent!', 400); }
        return await empleadoModel.getById(id);
    }
}

module.exports = EmpleadoService;