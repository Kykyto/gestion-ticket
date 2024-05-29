const Client = require('../models/client');

// Créer un nouveau client
exports.createClient = async (req, res) => {
  const { idClient, nom, adresse, telephone,email } = req.body;
  try {
    const client = new Client({ idClient, nom, adresse, telephone,email});
    await client.save();
    res.status(201).json({ message: 'Client créé avec succès', client });
  } catch (error) {
    console.error('Erreur lors de la création du client :', error);
    res.status(500).json({ message: 'Erreur lors de la création du client' });
  }
};

// Mettre à jour un client existant
exports.updateClient = async (req, res) => {
  const { nom, adresse, telephone, email } = req.body;
  const clientId = req.params.id;

  try {
    const client = await Client.findByIdAndUpdate(clientId, { nom, adresse, telephone, email }, { new: true });
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    res.json({ message: 'Client mis à jour avec succès', client });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du client :', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du client' });
  }
};

// Supprimer un client
exports.deleteClient = async (req, res) => {
  const clientId = req.params.id;

  try {
    const client = await Client.findByIdAndDelete(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    res.json({ message: 'Client supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du client :', error);
    res.status(500).json({ message: 'Erreur lors de la suppression du client' });
  }
};

// Obtenir tous les clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error('Erreur lors de la récupération des clients :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des clients' });
  }
};
