const Book = require('../models/Book');

// Listar todos os livros
exports.listBooks = async (req, res) => {
  const books = await Book.findAll();
  res.render('books/index', { books });
};

// Exibir formulário para adicionar novo livro
exports.newBookForm = (req, res) => {
  res.render('books/new');
};

// Criar novo livro
exports.createBook = async (req, res) => {
  const { title, author, year } = req.body;
  await Book.create({ title, author, year });
  res.redirect('/books');
};

// Exibir formulário para editar um livro existente
exports.editBookForm = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.render('books/edit', { book });
};

// Atualizar livro
exports.updateBook = async (req, res) => {
  const { title, author, year } = req.body;
  await Book.update({ title, author, year }, { where: { id: req.params.id } });
  res.redirect('/books');
};

// Remover livro
exports.deleteBook = async (req, res) => {
  await Book.destroy({ where: { id: req.params.id } });
  res.redirect('/books');
};
