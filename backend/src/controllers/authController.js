const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const jwtSecret = 'cle_secrete_mouahahahahahaha';

exports.login = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    // Recherche de l'utilisateur dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }

    // Vérification du mot de passe
    const passwordMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }

    // Création du token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });

    // Envoi de la réponse avec le token
    res.json({ message: 'Authentification réussie', token });
  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error);
    res.status(500).json({ message: 'Erreur lors de l\'authentification' });
  }
};

exports.register = async (req, res) => {
  const { nom, email, mot_de_passe, role } = req.body;

  try {
    // Vérification si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // Création d'un nouvel utilisateur
    const user = new User({ nom, email, mot_de_passe: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'Utilisateur enregistré avec succès', user });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
  }
};
