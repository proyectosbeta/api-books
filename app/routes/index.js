const express = require("express");
const router = express.Router();
const books = require('../controllers/Book.js');

router.post('/books', books.add);
router.get('/books/:id', books.get);
router.patch('/books/:id', books.edit);
router.delete('/books:id', books.remove);
router.get('/books', books.getAll);

module.exports = router;