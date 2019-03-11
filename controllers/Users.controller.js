const UserServicesClass = require('../services/users.services');
const userServices = new UserServicesClass();

class UsersController {
     async get(req, res) {
        let userId = req.params.userId;
        const response = await userServices.get(userId)
        .catch(e => e);
        return res.json(response);
    }

    async list(req, res) {
        const response = await userServices.list({})
        .catch(e => e);
        return res.json(response);
    }

    async create(req, res) {
        let payload = req.body;
        const response = await userServices.create(payload)
        .catch(e => e);
        return res.send(response);
    }

    async update(req, res) {
        let userId = req.params.userId;
        let payload = {
            memb__pwd: req.body.memb__pwd,
            memb_name: req.body.memb_name,
            mail_addr: req.body.mail_addr,
            SecretAnswer: req.body.SecretAnswer
        }
        const response = await userServices.update(userId, payload)
        .catch(e => e);
        return res.send(response);
    }

    async delete(req, res) {
        let userId = req.params.userId;
        const response = await userServices.delete(userId)
        .catch(e => e);

        return res.json(response);
    }
}

module.exports = UsersController;