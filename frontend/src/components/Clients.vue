<template>
  <div class="container mt-5">
    <h1>Clients</h1>
    <div class="mb-3">
      <label for="searchClient" class="form-label">Rechercher un client par nom :</label>
      <input type="text" id="searchClient" class="form-control" v-model="searchQuery" />
    </div>
    <div v-if="loading">Chargement des clients...</div>
    <div v-else>
      <div v-for="client in filteredClients" :key="client._id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ client.nom }}</h5>
          <p class="card-text"><strong>Adresse :</strong> {{ client.adresse }}</p>
          <p class="card-text"><strong>Email :</strong> {{ client.email }}</p>
          <p class="card-text"><strong>Téléphone :</strong> {{ client.telephone }}</p>
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
      loading: false,
      errorMessage: '',
      debounceTimer: null
    };
  },
  mounted() {
    this.fetchClients();
  },
  methods: {
    fetchClients() {
      this.loading = true;
      this.errorMessage = '';
      axios.get('http://localhost:3000/clients')
        .then(response => {
          console.log(response.data)
          this.clients = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des clients :', error);
          this.errorMessage = 'Erreur lors de la récupération des clients. Veuillez réessayer plus tard.';
          this.loading = false;
        });
    },
    onSearchInput() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.filterClients();
      }, 300);
    },
    filterClients() {
      // La logique de filtrage est maintenant déclenchée après un délai de 300ms
    }
  },
  computed: {
    filteredClients() {
      return this.clients.filter(client =>
        client.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
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
