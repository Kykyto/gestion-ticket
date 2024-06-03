<template>
  <div class="container mt-5">
    <h1>Projets</h1>
    <div class="mb-3">
      <label for="searchProject" class="form-label">Rechercher un projet par nom :</label>
      <input type="text" id="searchProject" class="form-control" v-model="searchQuery" />
    </div>
    <!-- <div class="mb-3">
      <label for="selectClient" class="form-label">Filtrer par client :</label>
      <select id="selectClient" class="form-select" v-model="selectedClient">
        <option value="">Tous les clients</option>
        <option v-for="client in clients" :key="client._id" :value="client._id">{{ client.name }}</option>
      </select>
    </div> -->
    <div v-if="loading">Chargement des projets...</div>
    <div v-else v-if="this.$store.getters.user.role == 'Admin'">
      <div v-for="project in projects" :key="project._id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ project.nom }}</h5>
          <p class="card-text"><strong>Description :</strong> {{ project.description }}</p>
          <p class="card-text"><strong>Client :</strong> {{ project.client_id }}</p>
          <router-link :to="{ name: 'Projet', params: { id: project._id } }" class="btn btn-primary">Voir</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'projects',
  data() {
    return {
      projects: [],
      clients: [],
      searchQuery: '',
      selectedClient: '',
      loading: false
    };
  },
  mounted() {
    this.fetchProjects();
    this.fetchClients();
  },
  methods: {
    fetchProjects() {
      this.loading = true;
      axios.get('http://localhost:3000/projects')
          .then(response => {
            this.projects = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des projets :', error);
            this.loading = false;
          });
    },
    fetchClients() {
      axios.get('http://localhost:3000/clients')
          .then(response => {
            this.clients = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des clients :', error);
          });
    }
  },
  // computed: {
  //   filteredProjects() {
  //     // Filtrer les projets en fonction de la recherche par nom et du client sélectionné
  //     return this.projects.filter(project =>
  //         project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
  //         (this.selectedClient === '' || project.clientId === this.selectedClient)
  //     );
  //   }
  // }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
