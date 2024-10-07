const bookModel = require("../models/book.model");
const loanModel = require("../models/loan.model");

class bookServices {
  static async getAll() {
    try {
      const getbooks = await bookModel.findAll();
      return getbooks;
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const getbooks = await bookModel.findByPk(id, {
        include: { model: loanModel, attributes: ["user_id"] },
      });
      return getbooks;
    } catch (error) {
      throw error;
    }
  }

  static async createOne(newbook) {
    try {
      const bookCreated = await bookModel.create(newbook);
      return bookCreated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    try {
      const bookDelete = await bookModel.destroy({ where: { bookId: id } });
      return bookDelete;
    } catch (error) {
      throw error;
    }
  }

  static async updateOne(id, bookToUpdate) {
    try {
      const bookUpdated = await bookModel.update(bookToUpdate, {
        where: { bookId: id },
      });
      return await bookModel.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = bookServices;
