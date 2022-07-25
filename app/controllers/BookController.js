// File: controllers/Book.js
const bookService = require("../services/bookService");

// GET - Return all books in the DB.
const getAllBooks = async (req, res) => {
  const allBooks = await bookService.getAllBooks();

  res.status(200).send({
    success: true,
    data: allBooks,
  });
};

// GET - Return a bok with specified ID.
const getOneBook = async (req, res) => {
  const book = await bookService.getOneBook(req.params.bookId);

  res.status(200).send({
    success: true,
    data: book,
  });
};

// POST - create book.
const createNewBook = async (req, res) => {
  const { body } = req;

  if (
    !body.title ||
    !body.description ||
    !body.author ||
    !body.link ||
    !body.year
  ) {
    return;
  }

  const createdBook = await bookService.createNewBook(body);
  res.status(201).send({ success: true, data: createdBook });
};

// PATCH - edit book.
const updateOneBook = async (req, res) => {
  const updatedBook = await bookService.updateOneBook(req);
  res.send(`Update book ${req.params.bookId}`);
};

// DELETE - remove book.
const deleteOneBook = async (req, res) => {
  const deletedBook = await bookService.deleteOneBook(req);

  if (deletedBook > 0) {
    res.status(204);
	res.send("Book deleted!!!");
  } else {
    res.status(404);
	res.send({ error: "Book doesn't exist!" });
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateOneBook,
  deleteOneBook,
};
