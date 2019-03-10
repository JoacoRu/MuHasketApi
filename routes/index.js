const routes = require('express').Router();
const UsersControllerClass = require('../controllers/users.controller');
const CharacterControllerClass = require('../controllers/characters.controller');

const usersController = new UsersControllerClass();
const characterControllerClass = new CharacterControllerClass();

//Usuarios
routes.get('/users/:userId', usersController.get.bind(usersController));
routes.get('/users', usersController.list.bind(usersController));
routes.post('/users', usersController.create.bind(usersController));
routes.put('/users', usersController.update.bind(usersController));
routes.delete('/users/:userId', usersController.delete.bind(usersController));

//Personajes
routes.get('/characters/:id', characterControllerClass.get.bind(characterControllerClass));
routes.get('/characters/', characterControllerClass.list.bind(characterControllerClass));

module.exports = routes;