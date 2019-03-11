const UserServicesClass = require('../services/users.services');
const pass = require('../config/index');
const userServices = new UserServicesClass();

class UsersController {
     async get(req, res) {
        let userId = req.params.userId;
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        const response = await userServices.get(userId, pwd)
        .catch(e => e);
        return res.json(response);
    }

    async list(req, res) {
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        const response = await userServices.list({}, pwd)
        .catch(e => e);
        return res.json(response);
    }

    async create(req, res) {
        let payload = req.body;
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        const response = await userServices.create(payload, pwd)
        .catch(e => e);
        return res.send(response);
    }

    async update(req, res) {
        let userId = req.params.memb___id;
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        let payload = {
            memb__pwd: req.body.memb__pwd,
            memb_name: req.body.memb_name,
            mail_addr: req.body.mail_addr,
            SecretAnswer: req.body.SecretAnswer
        }
        const response = await userServices.update(userId, payload, pwd)
        .catch(e => e);
        return res.send(response);
    }

    async delete(req, res) {
        let userId = req.params.userId;
        let pwd = req.body.pass;
        if(pwd !== pass.privateKey.key) {
            return res.status(500).send({
                'message': 'Bad Credentials',
                'status': 500
            });    
        }
        const response = await userServices.delete(userId, pwd)
        .catch(e => e);

        return res.json(response);
    }
}

module.exports = UsersController;