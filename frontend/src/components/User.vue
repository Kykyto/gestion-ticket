<template>
  <div class="container mt-5">
    <h1>Profil</h1>

    <!-- Afficher les détails de l'utilisateur -->
    <div v-if="user">
      <div class="mb-3">
        <label for="firstName" class="form-label">Prénom :</label>
        <input type="text" class="form-control" id="firstName" v-model="user.firstName">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Nom :</label>
        <input type="text" class="form-control" id="lastName" v-model="user.lastName">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email :</label>
        <input type="email" class="form-control" id="email" v-model="user.email">
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Rôle :</label>
        <select id="role" class="form-select" v-model="user.role">
          <option value="developpeur">Développeur</option>
          <option value="rapporteur">Rapporteur</option>
        </select>
      </div>

      <!-- Boutons d'action -->
      <button type="button" class="btn btn-primary" @click="updateUser">Enregistrer</button>
      <button type="button" class="btn btn-danger" @click="deleteUser">Supprimer</button>
    </div>

    <!-- Afficher un message si aucun utilisateur n'est sélectionné -->
    <div v-else>
      <p>Aucun utilisateur sélectionné.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      user: null
    };
  },
  methods: {
    fetchUserDetails() {
      const userId = this.$route.params.id;
      // RECUPERER UN UTILISATEUR AVEC SON ID
      axios.get(`/api/users/${userId}`)
          .then(response => {
            this.user = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des détails de l\'utilisateur : ', error);
          });
    },
    updateUser() {
      // REQUETE POUR UPDATE LES DONNEES DE L'UTILISATEUR
      axios.put(`/api/users/${this.user.id}`, this.user)
          .then(response => {
            console.log('Utilisateur mis à jour avec succès : ', response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour de l\'utilisateur : ', error);
          });
    },
    deleteUser() {
      if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
        // REQUETE POUR SUPPRIMER L'UTILISATEUR DE LA BDD
        axios.delete(`/api/users/${this.user.id}`)
            .then(response => {
              console.log('Utilisateur supprimé avec succès : ', response.data);
            })
            .catch(error => {
              console.error('Erreur lors de la suppression de l\'utilisateur : ', error);
            });
      }
    }
  },
  mounted() {
    this.fetchUserDetails();
  }
};
</script>
