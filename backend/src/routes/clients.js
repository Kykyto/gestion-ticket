const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientsController');
const authMiddleware = require('../middleware/authMiddleware');

// Créer un client
router.post('/', authMiddleware.verifyToken, clientController.createClient);

// Modifier un client
router.put('/:id', authMiddleware.verifyToken, clientController.updateClient);

// Supprimer un client
router.delete('/:id', authMiddleware.verifyToken, clientController.deleteClient);

// Obtenir tous les clients
router.get('/', authMiddleware.verifyToken, clientController.getAllClients);

module.exports = router;
