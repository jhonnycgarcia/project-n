const { Client } = require('pg');
// let cn = null;
let instance = null;

class Db {

    cn;
    connected;

    constructor() {
        this.connected = false;
        this.cn = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDB,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        });
    }

    /** ==============================================
     *         Return instance - SINGLETON
     ============================================== */
    static getInstance() {
        if (!instance) { instance = new Db(); }
        return instance
    }

    /** ==============================================
     *          Init connection
     ============================================== */
    async init(callback) {
        await this.cn.connect((err) => {
            if (err) { return callback(err.stack, null); }
            this.connected = true;
            callback(null, 'Db connected');
        });
    }

    /** ==============================================
     *          Status connection
     ============================================== */
    status() {
        return this.connected;
    }

    /** ==============================================
     *          Execute Query
     ============================================== */
    async ejecutarQuery(query, callback) {
        instance.cn.query(query, (err, result) => {
            if (err) { return callback(err, null); }
            callback(null, result);
        });
    }


    /** ==============================================
     *          Disconnect
     ============================================== */
    async disconnect() {
        this.cn.end();
        this.connected = false;
    }
}

module.exports = Db;