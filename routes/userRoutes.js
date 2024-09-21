const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.listUsers);
router.get('/users/new', userController.newUserForm);
router.post('/users', userController.createUser);
router.post('/users/delete/:id', userController.deleteUser);

module.exports = router;
