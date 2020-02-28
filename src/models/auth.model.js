const Db = require('../db/db');
let conection = null;

class AuthModel {
    constructor() {
        conection = Db.getInstance();
    }

    authUser(username, password, callback) {
        const query = `SELECT * FROM public.empleados`;
        callback(null, 'authUser - AuthModel');
        // conection.ejecutarQuery(query, (err, result) => {
        //     if (err) { return callback(err, null); }
        //     if (result.rows.lenght <= 0) {
        //         return callback('No se encontraron registros', null);
        //     }
        //     callback(null, result);
        // });
    }
}

module.exports = AuthModel;