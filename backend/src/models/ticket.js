const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String },
  date_creation: { type: Date, default: Date.now },
  statut: { type: String, required: true },
  projet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  rapporteur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);
