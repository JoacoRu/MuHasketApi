const CharacterModel = require('../models/Character');

class CharacterService {
    get(userId) {
        return CharacterModel.findById(userId);
    }

    list(search = {}) {
        return CharacterModel.findAll(search);
    }
}

module.exports = CharacterService;