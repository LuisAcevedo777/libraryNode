const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Book = db.define(
  "books",
  {
    bookId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "book_id",
    },
    title: { type: DataTypes.STRING(70), allowNull: false },
    author: { type: DataTypes.STRING(70) },
    price:{type: DataTypes.INTEGER},
    publicationYear: {type: DataTypes.INTEGER(), field: "publication_year" },
    quantity: {type: DataTypes.INTEGER()},
    foto:{type: DataTypes.STRING(500)} 
  },
  { timestamps: true }
);

module.exports = Book;
