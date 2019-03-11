const UserModel = require('../models/MEMB_INFO');

class UsersService {
    get(userId, pwd) {
        return UserModel.findOne({
            where: {'memb___id': userId}
        });
    }

    list(search = {}, pwd) {
        return UserModel.findAll(search);
    }

    create(payload = {}, pwd) {
        let  {memb___id, memb__pwd, memb_name, sno__numb, mail_addr, appl_days, modi_days, out__days, true_days, mail_chek, bloc_code, ctl1_code, confirmed, SecretAnswer, activation_id, Gender, Country, SecretQuestion, Vip, InicioVIP, FinVIP, VipTipe, VipDate, VipINF, admincp, credits, credits2, m_Grand_Resets, mvc_vip_date, msponsor_limit, smtp_block, scrable_wrong, scrable_level} = payload;

        payload = {memb___id, memb__pwd, memb_name, sno__numb, mail_addr, appl_days, modi_days, out__days, true_days, mail_chek, bloc_code, ctl1_code, confirmed, SecretAnswer, activation_id, Gender, Country, SecretQuestion, Vip, InicioVIP, FinVIP, VipTipe, VipDate, VipINF, admincp, credits, credits2, m_Grand_Resets, mvc_vip_date, msponsor_limit, smtp_block, scrable_wrong, scrable_level};

        let User = UserModel.build(payload);
        return User.save();
    }

    update(userId, payload = {}, pwd) {
        return UserModel.update(
            payload,
            {where: {memb___id: userId}
        });
    }

    delete(userId, pwd) {
        return UserModel.destroy({
            where: {memb___id: userId}
        });
    }
}

module.exports = UsersService;