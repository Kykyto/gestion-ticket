const ModifieTicket = require('../models/modifieTickets');

// Créer une nouvelle modification de ticket
exports.createModifieTicket = async (req, res) => {
  const { ticket_id, statut, date_changement, utilisateur_id } = req.body;

  try {
    const modifieTicket = new ModifieTicket({ ticket_id, statut, date_changement, utilisateur_id });
    await modifieTicket.save();
    res.status(201).json({ message: 'Modification de ticket créée avec succès', modifieTicket });
  } catch (error) {
    console.error('Erreur lors de la création de la modification de ticket :', error);
    res.status(500).json({ message: 'Erreur lors de la création de la modification de ticket' });
  }
};

// Obtenir toutes les modifications de ticket pour un ticket donné
exports.getModifieTicketsForTicket = async (req, res) => {
  const ticketId = req.params.ticketId;

  try {
    const modifieTickets = await ModifieTicket.find({ ticket_id: ticketId });
    res.json(modifieTickets);
  } catch (error) {
    console.error('Erreur lors de la récupération des modifications de ticket :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des modifications de ticket' });
  }
};

// Obtenir toutes les modifications de ticket effectuées par un utilisateur donné
exports.getModifieTicketsForUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const modifieTickets = await ModifieTicket.find({ utilisateur_id: userId });
    res.json(modifieTickets);
  } catch (error) {
    console.error('Erreur lors de la récupération des modifications de ticket :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des modifications de ticket' });
  }
};
