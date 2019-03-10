module.exports = {
    sequelize : {
        dialect: 'mssql',
        database: 'NOMBRE DE LA DB',
        username: 'sa',
        password: 'CONTRASEÑA DB',
        host: 'HOST'
    },
    server : {
        host: '0.0.0.0', //0.0.0.0 escucha en todas las ip de tu servidor , de lo contrario pone tu ip
        port: 3001 //puerto del servidor donde va a estar alojada la api
    }
}