const Ticket = require('../models/ticket');

// Créer un nouveau ticket
exports.createTicket = async (req, res) => {
  const { titre, description, statut, projet_id, rapporteur_id } = req.body;

  try {
    const ticket = new Ticket({ titre, description, statut, projet_id, rapporteur_id });
    await ticket.save();
    res.status(201).json({ message: 'Ticket créé avec succès', ticket });
  } catch (error) {
    console.error('Erreur lors de la création du ticket :', error);
    res.status(500).json({ message: 'Erreur lors de la création du ticket' });
  }
};

// Mettre à jour un ticket existant
exports.updateTicket = async (req, res) => {
  const { titre, description, statut, projet_id, rapporteur_id } = req.body;
  const ticketId = req.params.id;

  try {
    const ticket = await Ticket.findByIdAndUpdate(ticketId, { titre, description, statut, projet_id, rapporteur_id }, { new: true });
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket non trouvé' });
    }
    res.json({ message: 'Ticket mis à jour avec succès', ticket });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du ticket :', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du ticket' });
  }
};

// Supprimer un ticket
exports.deleteTicket = async (req, res) => {
  const ticketId = req.params.id;

  try {
    const ticket = await Ticket.findByIdAndDelete(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket non trouvé' });
    }
    res.json({ message: 'Ticket supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du ticket :', error);
    res.status(500).json({ message: 'Erreur lors de la suppression du ticket' });
  }
};

// Obtenir tous les tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    console.error('Erreur lors de la récupération des tickets :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des tickets' });
  }
};
