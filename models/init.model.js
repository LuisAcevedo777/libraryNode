const userModel = require('../models/user.model')
const bookModel = require('../models/book.model')
const loanModel = require('../models/loan.model')


const initModel = ()=>{


    userModel.hasMany(loanModel, { foreignKey: 'userId' }); // Un usuario puede tener muchos préstamos
    loanModel.belongsTo(userModel, { foreignKey: 'userId' }); // Un préstamo pertenece a un usuario
    
    bookModel.hasMany(loanModel, { foreignKey: 'bookId' }); // Un libro puede estar en muchos préstamos
    loanModel.belongsTo(bookModel, { foreignKey: 'bookId' })// Un préstamo pertenece a un libro

}

module.exports = initModel


