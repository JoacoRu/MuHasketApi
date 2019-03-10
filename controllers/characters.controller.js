const CharactersService = require('../services/characters.services');
const charactersService = new CharactersService();

class CharactersController {
    async get(req, res) {
        let userId = req.params.userId;
        let response = await charactersService.get(userId)
        .catch(e => e);
        return res.json(response);
    }

    async list(req, res) {
        let search = req.params.search;
        let response = await charactersService.list(search)
        .catch(e => e);

        return res.json(response);
    }
}

module.exports = CharactersController;