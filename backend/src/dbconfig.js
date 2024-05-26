const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/ticketsManager';

// Options de configuration pour Mongoose
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

// Fonction de connexion à la base de données
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, options);
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Arrête l'application en cas d'échec de connexion
  }
};

module.exports = connectDB;
