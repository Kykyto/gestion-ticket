const express = require('express');
const router = express.Router();
const modifieTicketController = require('../controllers/modifieTicketsController');
const authMiddleware = require('../middleware/authMiddleware');

// Créer une nouvelle modification de ticket
router.post('/',authMiddleware.verifyToken, modifieTicketController.createModifieTicket);

// Obtenir toutes les modifications de ticket pour un ticket donné
router.get('/ticket/:ticketId',authMiddleware.verifyToken, modifieTicketController.getModifieTicketsForTicket);

// Obtenir toutes les modifications de ticket effectuées par un utilisateur donné
router.get('/user/:userId',authMiddleware.verifyToken, modifieTicketController.getModifieTicketsForUser);

module.exports = router;

