const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketsController');
const authMiddleware = require('../middleware/authMiddleware');

// Créer un ticket
router.post('/', authMiddleware.verifyToken, ticketController.createTicket);

// Modifier un ticket
router.put('/:id', authMiddleware.verifyToken, ticketController.updateTicket);
// Supprimer un ticket
router.delete('/:id', authMiddleware.verifyToken, ticketController.deleteTicket);

// Obtenir tous les tickets
router.get('/', authMiddleware.verifyToken, ticketController.getAllTickets);

router.get('/:id', authMiddleware.verifyToken, ticketController.getTicketById);

module.exports = router;
