const { DataTypes } = require("sequelize");
const db = require("../utils/db");
const userModel = require("../models/user.model");
const bookModel = require("../models/book.model");

const Loan = db.define(
  "loans",
  {
    loanId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "loan_id",
    },
    userId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      references: { model: userModel, key: "user_id" },
      field: "user_id",
    },
    bookId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      references: { model: bookModel, key: "book_id" },
      field: "book_id",
    },
    loanDate: { type: DataTypes.STRING(25), allowNull: false, field: "loan_date" },
    returnDate: {
      type: DataTypes.STRING(25),
      allowNull: false,
      field: "return_date",
    },
  },
  { timestamps: false }
);

module.exports = Loan;
