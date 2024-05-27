const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/ticketsManager';

// Fonction de connexion à la base de données
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Arrête l'application en cas d'échec de connexion
  }
};

module.exports = connectDB;
