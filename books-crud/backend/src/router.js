const express = require('express');
const booksController = require('./controllers/booksController.js')

const router = express.Router();

router.get('/books', booksController.getAll)
module.exports = router;
