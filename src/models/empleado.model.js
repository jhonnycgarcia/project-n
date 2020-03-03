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

    async getTotalPagesNumber(pageSize) {
        const countAll = await this.getCountAll();
        return Math.ceil(countAll / pageSize);
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

        const totalPage = await this.getTotalPagesNumber(pageSize);

        const result = await conection.ejecutarQuery(query);
        return { empleados: result['rows'], rowCount: result['rowCount'], pageSize, pageNumber, totalPage };
    }

    async getById(id) {
        const query = `SELECT oid, id_empleado, nombre, apellido, TO_CHAR(fecha_ingreso,'yyyy-MM-dd') AS fecha_ingreso, 
            TO_CHAR(fecha_egreso,'yyyy-MM-dd') AS fecha_egreso, departamento, status, sueldo, cargo, 
            TO_CHAR(fecha_nacimiento,'yyyy-MM-dd') AS fecha_nacimiento, sexo, edad, antiguedad
        FROM public.empleados WHERE oid = ${id} LIMIT 1`;
        const empleado = await conection.ejecutarQuery(query);
        if (empleado['rowCount'] === 0) { throw new ValidationError(`Not found regist with id "${id}" `, 400); }
        return {...empleado['rows'][0] };
    }
}

module.exports = EmpleadoModel;