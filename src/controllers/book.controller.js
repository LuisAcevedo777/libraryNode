const bookServices = require("../services/book.service");

const getAllBooksController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getbooks = await bookServices.getAll();
    res.json(getbooks);
  } catch (error) {
    next(error);
  }
};

const getBookController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getbooks = await bookServices.getOne(id);
    res.json(getbooks);
  } catch (error) {
    next(error);
  }
};

const createBookController = async (req, res, next) => {
  try {
    const newBook = req.body;
    const bookCreated = await bookServices.createOne(newBook);
    res.status(201).send(bookCreated);
  } catch (error) {
    next(error);
  }
};

const deleteBookController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookDelete = await bookServices.deleteOne(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateBookController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookToUpdate = req.body;
    const bookUpdated = await bookServices.updateOne(id, bookToUpdate);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBookController,
  getAllBooksController,
  createBookController,
  deleteBookController,
  updateBookController,
};
