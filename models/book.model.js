const {DataTypes} = require('sequelize')
const db = require('../utils/db')

const Book = db.define('books',{


bookId: {type: DataTypes.INTEGER(), allowNull: false, primaryKey: true, autoIncrement: true, field: 'book_id'},
title: {type: DataTypes.STRING(25), allowNull: false},
author: {type: DataTypes.STRING(25)},
publicationYear: {type: DataTypes.INTEGER(), field: 'publication_year'},

},{timestamps: true})

module.exports = Book