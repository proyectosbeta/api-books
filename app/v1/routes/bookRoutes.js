const express = require("express");
const router = express.Router();
const books = require("../../controllers/BookController");

router
  .get("/", books.getAllBooks)
  .get("/:bookId", books.getOneBook)
  .post("/", books.createNewBook)
  .patch("/:bookId", books.updateOneBook)
  .delete("/:bookId", books.deleteOneBook);

module.exports = router;
