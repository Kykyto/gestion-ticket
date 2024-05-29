<template>
  <div class="container mt-5">
    <h1>Tickets</h1>
    <div class="filters mb-4">
      <div class="row">
        <div class="col-md-4">
          <label for="clientFilter">Filtrer par client</label>
          <select id="clientFilter" class="form-select" v-model="selectedClient" @change="fetchTickets">
            <option value="">Tous les clients</option>
            <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="projectFilter">Filtrer par projet</label>
          <select id="projectFilter" class="form-select" v-model="selectedProject" @change="fetchTickets">
            <option value="">Tous les projets</option>
            <option v-for="project in projects" :key="project.id" :value="project.id">{{ project.name }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="tickets-list">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Titre</th>
          <th>Client</th>
          <th>Projet</th>
          <th>Statut</th>
          <th>Date de modification</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td>{{ ticket.title }}</td>
          <td>{{ ticket.client?.name }}</td>
          <td>{{ ticket.project?.name }}</td>
          <td>{{ ticket.status }}</td>
          <td>{{ new Date(ticket.modifiedDate).toLocaleString() }}</td>
          <td>
            <router-link :to="{ name: 'Ticket', params: { id: ticket.id } }" class="btn btn-primary">Voir</router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TicketsList',
  data() {
    return {
      tickets: [],
      clients: [],
      projects: [],
      selectedClient: '',
      selectedProject: '',
    };
  },
  mounted() {
    this.fetchClients();
    this.fetchProjects();
    this.fetchTickets();
  },
  methods: {
    fetchClients() {
      // MODIFIER L'URL POUR RECUPERER LES CLIENTS
      axios.get('http://localhost:3000/clients')
          .then(response => {
            this.clients = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des clients:', error);
          });
    },
    fetchProjects() {
      // RECUPERER LES PROJETS
      axios.get('http://localhost:3000/projects')
          .then(response => {
            this.projects = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des projets:', error);
          });
    },
    fetchTickets() {
      const params = {
        client: this.selectedClient,
        project: this.selectedProject
      };
      // FETCH LES TICKETS EN PRENANT EN COMPTE LES FILTRES (CLIENT, PROJET)
      axios.get('http://localhost:3000/tickets', { params })
          .then(response => {
            this.tickets = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des tickets:', error);
          });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
