const User = require('../models/user');

// Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    const { nom, email, mot_de_passe, role } = req.body;
  
    try {
      const user = new User({ nom, email, mot_de_passe, role });
      await user.save();
      res.status(201).json({ message: 'Utilisateur créé avec succès', user });
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
  };
  
  // Supprimer un utilisateur
  exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
  };
  
  // Obtenir tous les utilisateurs
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
  };