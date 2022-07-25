const express = require("express");
const apicache = require("apicache-plus");

const router = express.Router();
const books = require("../../controllers/BookController");

router
  .get("/", apicache("2 minutes"), books.getAllBooks)
  .get("/:bookId", books.getOneBook)
  .post("/", books.createNewBook)
  .patch("/:bookId", books.updateOneBook)
  .delete("/:bookId", books.deleteOneBook);

module.exports = router;
