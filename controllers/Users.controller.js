const UserServices = require('../services/users.services');

exports.get = (req, res) => UserServices.get(req.params.id)
    .then(response => response
        ? res.json(response)
        : res.status(400).json({'message': 'not found'}))
    .catch(error => res.status(500).send(error));