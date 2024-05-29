const mongoose = require('mongoose');

const dbURI = 'mongodb://admin:admin@localhost:27017/';

// Fonction de connexion à la base de données
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI,{dbName: "TicketManager"});
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Arrête l'application en cas d'échec de connexion
  }
};

module.exports = connectDB;
