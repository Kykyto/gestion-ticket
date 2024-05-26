const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true }
});

module.exports = mongoose.model('Project', projectSchema);
