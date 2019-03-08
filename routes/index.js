const routes = require('express').Router();
const Users = require('../models/User');
const UsersController = require('../controllers/Users.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', UsersController.get);


module.exports = routes;