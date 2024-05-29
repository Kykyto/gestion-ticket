<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <!-- Project Name input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="projectName">Nom du projet</label>
          <input type="text" id="projectName" class="form-control" v-model="projectName" required />
        </div>

        <!-- Description input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="description">Description</label>
          <textarea id="description" class="form-control" v-model="description" required></textarea>
        </div>

        <!-- Client selection -->
        <div class="form-outline mb-4">
          <label class="form-label" for="client">Client</label>
          <select id="client" class="form-select" v-model="selectedClient" required>
            <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
          </select>
        </div>

        <!-- Submit button -->
        <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100">Créer le projet</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateProject',
  data() {
    return {
      projectName: '',
      description: '',
      selectedClient: '',
      clients: []
    };
  },
  methods: {
    fetchClients() {
      //MODIFIER L'URL POUR RECUPERER LES CLIENTS
      axios.get('http://localhost:3000/clients')
          .then(response => {
            this.clients = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des clients:', error);
          });
    },
    submitForm() {
      //MODIFIER L'URL POUR AJOUTER UN PROJET ET UNE COMMANDE DANS LA BDD
      //*** RAPPEL ***//
      // PROJET : NOM ET DESCRIPTION
      // COMMANDE : ID PROJET et ID CLIENT
      axios.post('http://localhost:3000/projects', {
        name: this.projectName,
        description: this.description,
        clientId: this.selectedClient
      }).then(response => {
        console.log('Projet créé avec succès:', response.data);
        this.resetForm();
      }).catch(error => {
        console.error('Erreur lors de la création du projet:', error);
      });
    },
    resetForm() {
      this.projectName = '';
      this.description = '';
      this.selectedClient = '';
    }
  },
  created() {
    this.fetchClients();
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
