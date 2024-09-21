const User = require('../models/User');

// Listar usuários
exports.listUsers = async (req, res) => {
  const users = await User.findAll();
  res.render('users/index', { users });
};

// Exibir formulário para criar novo usuário
exports.newUserForm = (req, res) => {
  res.render('users/new');
};

// Criar novo usuário
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  res.redirect('/users');
};

// Remover usuário
exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.redirect('/users');
};
