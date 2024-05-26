const express = require('express');
const router = express.Router();
const modifieTicketController = require('../controllers/modifieTicketsController');

// Créer une nouvelle modification de ticket
router.post('/', modifieTicketController.createModifieTicket);

// Obtenir toutes les modifications de ticket pour un ticket donné
router.get('/ticket/:ticketId', modifieTicketController.getModifieTicketsForTicket);

// Obtenir toutes les modifications de ticket effectuées par un utilisateur donné
router.get('/user/:userId', modifieTicketController.getModifieTicketsForUser);

module.exports = router;

