const {Sequelize} = require('sequelize')

const db = new Sequelize({
 
    database: 'library',
    port:  5432,
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'root',
    logging: false
})


module.exports = db