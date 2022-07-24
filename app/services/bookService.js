const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    return allBooks;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneBook = async (bookId) => {
  try {
    const book = await Book.findOne({ _id: bookId });
    if (!book) {
      throw {
        status: 400,
        message: `Can't find book with the id '${bookId}'`,
      };
    }
    return book;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewBook = (body) => {
  const book = new Book({
    title: body.title,
    description: body.description,
    author: body.author,
    link: body.link,
    year: body.year,
  });

  book.save();
  return book;
};

const updateOneBook = async (req) => {
  const { body, params } = req;

  try {
    const book = await Book.findOne({ _id: params.bookId });

    if (body.title) {
      book.title = body.title;
    }

    if (body.description) {
      book.description = body.description;
    }

    if (body.author) {
      book.author = body.author;
    }

    if (body.link) {
      book.link = body.link;
    }

    if (body.year) {
      book.year = body.year;
    }

    await book.save();
    return book;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneBook = async (req) => {
  const { params } = req;

  try {
    const deletedBook = await Book.deleteOne({ _id: params.bookId });
    return deletedBook.n;
  } catch {
    return false;
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateOneBook,
  deleteOneBook,
};
