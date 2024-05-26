const mongoose = require('mongoose');

const modifiedTicketSchema = new mongoose.Schema({
  ticket_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  statut: { type: String, required: true },
  date_changement: { type: Date, default: Date.now },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('ModifiedTicket', modifiedTicketSchema);
