const User = require('../models/User');

const get = id => localStorage.findById(id);

module.exports = {get};