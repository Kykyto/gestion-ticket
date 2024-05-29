const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const authMiddleware = require('../middleware/authMiddleware');

// Route pour obtenir le nombre de tickets par projet
router.get('/tickets-by-project', /*authMiddleware.verifyToken*/ statsController.getTicketsByProject);

// Route pour obtenir le nombre de tickets rapportés par utilisateur
router.get('/tickets-by-user', /*authMiddleware.verifyToken*/ statsController.getTicketsByUser);

module.exports = router;
