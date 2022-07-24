const express = require("express");
const apicache = require("apicache");

const router = express.Router();
const cache = apicache.middleware;
const books = require("../../controllers/BookController");

router
  .get("/", cache("2 minutes"), books.getAllBooks)
  .get("/:bookId", books.getOneBook)
  .post("/", books.createNewBook)
  .patch("/:bookId", books.updateOneBook)
  .delete("/:bookId", books.deleteOneBook);

module.exports = router;
