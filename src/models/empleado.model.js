const Db = require('../db/db');
const { ValidationError } = require('../helpers/errorsHandlers.helper');
let conection = null;

class EmpleadoModel {
    constructor() {
        conection = Db.getInstance();
    }

    async getCountAll(status = true) {
        const query = `SELECT COUNT(oid)::INTEGER FROM public.empleados WHERE status = ${status}`;
        const count = await conection.ejecutarQuery(query)
        return count['rows'][0]['count'];
    }

    async getPagesNumber(pageSize, countAll) {
        return await Math.ceil(countAll / pageSize);
    }

    async getAll(pageSize = 5, pageNumber = 1) {
        const offset = pageSize * (pageNumber - 1);
        const query = `
            SELECT *
            FROM public.empleados
            WHERE status = TRUE
            ORDER BY apellido ASC
            LIMIT ${pageSize}
            OFFSET ${offset} `;

        const result = await conection.ejecutarQuery(query);
        const count = await this.getCountAll();
        const totalPage = await this.getPagesNumber(pageSize, count);

        if (pageNumber > totalPage) { throw new ValidationError('pgNumber is invalid', 400); }

        return { empleados: result['rows'], rowCount: result['rowCount'], pageSize, pageNumber, totalPage };
    }
}

module.exports = EmpleadoModel;