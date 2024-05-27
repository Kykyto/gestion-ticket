const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Créer un utilisateur
exports.createUser = async (req, res) => {
  const { nom, email, mot_de_passe, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
    const newUser = new User({ nom, email, mot_de_passe: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
  }
};

// Modifier un utilisateur
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (updates.mot_de_passe) {
    updates.mot_de_passe = await bcrypt.hash(updates.mot_de_passe, 10);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({ message: 'Utilisateur modifié avec succès', user: updatedUser });
  } catch (error) {
    console.error('Erreur lors de la modification de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la modification de l\'utilisateur' });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
  }
};

// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
  }
};
