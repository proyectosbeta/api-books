// File: controllers/Book.js
const Book = require('../models/Book.js');

// GET - Return all books in the DB.
exports.getAll = (async (req, res) => {
    const books = await Book.find();
    
	res.send(books)
});

// GET - Return a bok with specified ID.
exports.get = (async (req, res) => {
	try {
		const book = await Book.findOne({ _id: req.params.id });
		res.send(book);
	} catch {
		res.status(404);
		res.send({ error: "Book doesn't exist!" });
	}
});

// POST - 
exports.add = (async (req, res) => {
	const book = new Book({
		title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        link: req.body.link,
        year: req.body.year,
	});
	await book.save();
	res.send(book);
});

// PATCH - 
exports.edit = (async (req, res) => {
	try {
		const book = await Book.findOne({ _id: req.params.id });

		if (req.body.title) {
			book.title = req.body.title;
		}

		if (req.body.description) {
			book.description = req.body.description;
        }
        
        if (req.body.author) {
			book.author = req.body.author;
        }
        
        if (req.body.link) {
			book.link = req.body.link;
        }
        
        if (req.body.year) {
			book.year = req.body.year;
		}

		await book.save();
		res.send(book);
	} catch {
		res.status(404);
		res.send({ error: "Book doesn't exist!" });
	}
});

// DELETE -
exports.remove = (async (req, res) => {
	try {
		await Book.deleteOne({ _id: req.params.id });
		res.status(204).send();
	} catch {
		res.status(404);
		res.send({ error: "Book doesn't exist!" });
	}
});