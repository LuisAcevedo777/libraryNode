const userModel = require("../models/user.model");
const bookModel = require("../models/book.model");
const loanModel = require("../models/loan.model");

const initModel = () => {
  userModel.hasMany(loanModel, { foreignKey: "userId" }); 
  loanModel.belongsTo(userModel, { foreignKey: "userId" }); 

  bookModel.hasMany(loanModel, { foreignKey: "bookId" }); 
  loanModel.belongsTo(bookModel, { foreignKey: "bookId" }); 
};

module.exports = initModel;
