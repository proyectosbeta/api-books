const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  link: String,
  year: Number,
});

module.exports = mongoose.model('Book', schema);
