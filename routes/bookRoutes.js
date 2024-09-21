const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rotas para gerenciamento de livros
router.get('/books', bookController.listBooks);
router.get('/books/new', bookController.newBookForm);
router.post('/books', bookController.createBook);
router.get('/books/edit/:id', bookController.editBookForm);
router.post('/books/edit/:id', bookController.updateBook);
router.post('/books/delete/:id', bookController.deleteBook);

module.exports = router;
