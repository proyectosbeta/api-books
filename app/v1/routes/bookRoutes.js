const express = require("express");
const router = express.Router();
const books = require("../../controllers/BookController");

router
  .post("/books", books.add)
  .get("/books/:id", books.get)
  .patch("/books/:id", books.edit)
  .delete("/books:id", books.remove)
  .get("/books", books.getAll);

module.exports = router;
