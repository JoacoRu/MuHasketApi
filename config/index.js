module.exports = {
    sequelize : {
        dialect: 'mssql',
        database: 'MuOnline',
        username: 'sa',
        password: '',
        host: ''
    },
    server : {
        host: '0.0.0.0', //0.0.0.0 escucha en todas las ip de tu servidor , de lo contrario pone tu ip
        port: 3001 //puerto del servidor donde va a estar alojada la api
    },

    privateKey: {
        key: '127.0.0.1'
    }
}