const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String },
  telephone: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Client', clientSchema);
