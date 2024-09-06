const express = require('express');

const router = express.Router();

const booksController = require('./controllers/booksController.js')
const booksMiddleware = require('./middlewares/booksMiddleware.js')

router.get('/books',booksController.getAll)
router.post('/books', booksMiddleware.validadeBody,booksController.createBook)
router.delete('/books/:id',booksController.deleteBook);
router.put('/books/:id',booksMiddleware.validadeBody,booksController.updateBook);
module.exports = router;
