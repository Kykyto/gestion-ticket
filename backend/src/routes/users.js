const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Créer un utilisateur
router.post('/', authMiddleware.verifyAdmin, userController.createUser);

// Modifier un utilisateur
router.put('/:id', authMiddleware.verifyAdmin, userController.updateUser);

// Supprimer un utilisateur
router.delete('/:id', authMiddleware.verifyAdmin, userController.deleteUser);

// Obtenir tous les utilisateurs
router.get('/', authMiddleware.verifyToken, userController.getAllUsers);

module.exports = router;
