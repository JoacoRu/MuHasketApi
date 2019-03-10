const routes = require('express').Router();
const UsersControllerClass = require('../controllers/users.controller');
const CharacterControllerClass = require('../controllers/characters.controller');

const usersController = new UsersControllerClass();
const characterControllerClass = new CharacterControllerClass();

//Usuarios
routes.get('/users/:userId', usersController.get.bind(usersController));
routes.get('/users', usersController.list.bind(usersController));
routes.post('/users', usersController.create.bind(usersController));
routes.put('/users/:userId', usersController.update.bind(usersController));
routes.delete('/users/:userId', usersController.delete.bind(usersController));

//Personajes
routes.get('/characters/:userId', characterControllerClass.get.bind(characterControllerClass));
routes.get('/characters/', characterControllerClass.list.bind(characterControllerClass));
routes.get('/charactersByPj/:pjId', characterControllerClass.getByPj.bind(characterControllerClass));
routes.put('/characters/:pjId', characterControllerClass.update.bind(characterControllerClass));
routes.delete('/characters/:pjId', characterControllerClass.delete.bind(characterControllerClass));

module.exports = routes;