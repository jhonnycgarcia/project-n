const BaseRepository = require('./base.repository');
const { AuthModel } = require('../models');

class AuthRepository extends BaseRepository {
    model;
    constructor() {
        super(AuthModel);
        this.model = AuthModel;

    }
}

module.exports = AuthRepository;