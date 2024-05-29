const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectsController');
const authMiddleware = require('../middleware/authMiddleware');

// Créer un projet
router.post('/', /*authMiddleware.verifyToken*/ projectController.createProject);

// Modifier un projet
router.put('/:id', /*authMiddleware.verifyToken*/ projectController.updateProject);

// Supprimer un projet
router.delete('/:id', /*authMiddleware.verifyToken*/ projectController.deleteProject);

// Obtenir tous les projets
router.get('/', /*authMiddleware.verifyToken*/ projectController.getAllProjects);

module.exports = router;
