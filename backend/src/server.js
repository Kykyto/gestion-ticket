const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./dbconfig'); // Importer la fonction de connexion
const app = express();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const clientRoutes = require('./routes/clients');
const projectRoutes = require('./routes/projects');
const ticketRoutes = require('./routes/tickets');
const modifieTicketsRoutes = require('./routes/modifieTickets');
const statsRoutes = require('./routes/stats');

// Appeler la fonction de connexion à la base de données
connectDB();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/projects', projectRoutes);
app.use('/tickets', ticketRoutes);
app.use('/modifieTickets', modifieTicketsRoutes);
app.use('/stats', statsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
