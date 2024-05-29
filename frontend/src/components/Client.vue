<template>
  <div class="container mt-5">
    <h1>Client : {{ client.name }}</h1>
    <form @submit.prevent="updateClient">
      <div class="mb-3">
        <label for="clientName" class="form-label">Nom du client</label>
        <input type="text" id="clientName" class="form-control" v-model="client.name" />
      </div>
      <div class="mb-3">
        <label for="clientAddress" class="form-label">Adresse</label>
        <input type="text" id="clientAddress" class="form-control" v-model="client.address" />
      </div>
      <div class="mb-3">
        <label for="clientEmail" class="form-label">Adresse email</label>
        <input type="email" id="clientEmail" class="form-control" v-model="client.email" />
      </div>
      <div class="mb-3">
        <label for="clientPhone" class="form-label">Téléphone</label>
        <input type="text" id="clientPhone" class="form-control" v-model="client.phone" />
      </div>
      <button type="submit" class="btn btn-primary">Mettre à jour</button>
      <button type="button" class="btn btn-danger" @click="deleteClient">Supprimer</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Client',
  data() {
    return {
      client: {
        name: '',
        address: '',
        email: '',
        phone: ''
      }
    };
  },
  mounted() {
    this.fetchClient();
  },
  methods: {
    fetchClient() {
      const clientId = this.$route.params.id;
      // RECUPERER LE CLIENT PAR SON ID
      axios.get(`http://localhost:3000/clients/${clientId}`)
          .then(response => {
            this.client = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération du client :', error);
          });
    },
    updateClient() {
      const clientId = this.$route.params.id;
      // REQUETE POUR UPDATE LE CLIENT DANS LA BASE
      axios.put(`http://localhost:3000/clients/${clientId}`, {
        name: this.client.name,
        address: this.client.address,
        email: this.client.email,
        phone: this.client.phone
      })
          .then(() => {
            alert('Client mis à jour avec succès');
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour du client :', error);
          });
    },
    deleteClient() {
      const clientId = this.$route.params.id;
      // REQUETE POUR SUPPRIMER LE CLIENT
      axios.delete(`http://localhost:3000/clients/${clientId}`)
          .then(() => {
            alert('Client supprimé avec succès');
          })
          .catch(error => {
            console.error('Erreur lors de la suppression du client:', error);
          });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
