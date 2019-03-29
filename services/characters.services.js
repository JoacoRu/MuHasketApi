const CharacterModel = require('../models/Character');

class CharacterService {
    get(userId) {
        return CharacterModel.findAll({
            where: 
            {'AccountID': userId}
        });
    }

    getByPj(pjId) {
        return CharacterModel.findOne({
            where:
            {'Name': pjId}
        });
    }

    list(search = {}, pwd) {
        return CharacterModel.findAll(search);
    }

    update(pjId, payload, pwd) {
        let {Name, cLevel, LevelUpPoint, Experience, Strength, Dexterity, Vitality, Energy, Money, MapNumber, MapPosX, MapPosY, PkCount, PkLevel, CtlCode, FruitPoint, RESETS, Married, MarryName, mlNextExp, WinDuels, LoseDuels, Grand_Resets} = payload;
        
        payload = {Name, cLevel, LevelUpPoint, Experience, Strength, Dexterity, Vitality, Energy, Money, MapNumber, MapPosX, MapPosY, PkCount, PkLevel, CtlCode, FruitPoint, RESETS, Married, MarryName, mlNextExp, WinDuels, LoseDuels, Grand_Resets};
        return CharacterModel.update(
            payload, {
                where: {'Name': pjId},
            });
    }

    delete(pjId, pwd) {
        return CharacterModel.destroy({
            where: {'Name': pjId}
        });
    }
}

module.exports = CharacterService;