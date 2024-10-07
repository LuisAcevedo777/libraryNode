const { Router } = require("express");
const {
  getBookController,
  getAllBooksController,
  createBookController,
  deleteBookController,
  updateBookController,
} = require("../controllers/book.controller");
//const authMiddleware = require('../middlewares/auth.middleware')

const bookRouter = Router();

bookRouter.get("/api/books/", getAllBooksController);

bookRouter.get("/api/books/:id", getBookController);

bookRouter.post("/api/books/", createBookController);

bookRouter.delete("/api/books/:id", deleteBookController);

bookRouter.put("/api/books/:id", updateBookController);

module.exports = bookRouter;
