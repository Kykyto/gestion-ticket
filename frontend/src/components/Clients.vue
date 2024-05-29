<template>
  <div class="container mt-5">
    <h1>Clients</h1>
    <div class="mb-3">
      <label for="searchClient" class="form-label">Rechercher un client par nom :</label>
      <input type="text" id="searchClient" class="form-control" v-model="searchQuery" />
    </div>
    <div v-if="loading">Chargement des clients...</div>
    <div v-else>
      <div v-for="client in filteredClients" :key="client.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ client.name }}</h5>
          <p class="card-text"><strong>Adresse :</strong> {{ client.address }}</p>
          <p class="card-text"><strong>Email :</strong> {{ client.email }}</p>
          <p class="card-text"><strong>Téléphone :</strong> {{ client.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Clients',
  data() {
    return {
      clients: [],
      searchQuery: '',
      loading: false
    };
  },
  mounted() {
    this.fetchClients();
  },
  methods: {
    fetchClients() {
      this.loading = true;
      // RECUPERER TOUS LES CLIENTS
      axios.get('http://localhost:3000/clients')
          .then(response => {
            this.clients = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des clients :', error);
            this.loading = false;
          });
    }
  },
  computed: {
    filteredClients() {
      // Filtrer les clients en fonction de la recherche par nom
      return this.clients.filter(client =>
          client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
