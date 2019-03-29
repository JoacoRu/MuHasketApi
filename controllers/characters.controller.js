const CharactersService = require('../services/characters.services');
const pass = require('../config/index');
const charactersService = new CharactersService();

class CharactersController {
    async listAccount(req, res) {
        let userId = req.params.userId;
        let response = await charactersService.get(userId)
        .catch(e => e);
        return res.json(response);
    }

    async getByPj(req, res) {
        let pjId = req.params.pjId;
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        let response = await charactersService.getByPj(pjId, pwd)
        .catch(e => e);
        return res.json(response);
    }

    async list(req, res) {
        let search = req.params.search;
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        let response = await charactersService.list(search, pwd)
        .catch(e => e);
        return res.json(response);
    }

    async update(req, res) {
        let pjId = req.params.pjId;
        let payload = {
            Name: pjId,
            cLevel: req.body.cLevel,
            LevelUpPoint: req.body.LevelUpPoint,
            Experience: req.body.Experience,
            Strength: req.body.Strength,
            Dexterity: req.body.Dexterity,
            Vitality: req.body.Vitality,
            Energy: req.body.Energy,
            Money: req.body.Money,
            MapNumber: req.body.MapNumber,
            MapPosX: req.body.MapPosX,
            MapPosY: req.body.MapPosY,
            PkCount: req.body.PkCount,
            PkLevel: req.body.PkLevel,
            CtlCode: req.body.CtlCode,
            FruitPoint: req.body.FruitPoint,
            RESETS: req.body.RESETS,
            Married: req.body.Married,
            MarryName: req.body.MarryName,
            mlNextExp: req.body.mlNextExp,
            WinDuels: req.body.WinDuels,
            LoseDuels: req.body.LoseDuels,
            Grand_Resets: req.body.Grand_Resets
        };
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        let response = await charactersService.update(pjId, payload)
        .catch(e => e);
        return res.json(response);
    }

    async delete(req, res) {
        let pjId = req.params.pjId
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        let response = await charactersService.delete(pjId, pwd)
        .catch(e => e);

        return res.json(response);
    }
}

module.exports = CharactersController;