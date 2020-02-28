const { AuthModel } = require('../models');
let authModel = null;


class AuthService {

    constructor() {
        authModel = new AuthModel();
    }

    logIn(user, callback) {
        const { username, password } = user;
        authModel.authUser(username, password, (err, result) => {
            if (err) { return callback(err); }
            callback(null, result);
        });
    }
}

module.exports = AuthService;