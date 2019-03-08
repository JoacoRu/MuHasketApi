const Sequelize = require('sequelize');
const config = require('./config');

const connection = new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, {
    dialect: 'mssql',
    host: config.sequelize.host
})

connection
    .authenticate()
    .then(() => {
        console.log('Connection with db has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })
//

module.exports = connection;