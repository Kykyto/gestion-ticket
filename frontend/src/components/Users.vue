<template>
  <div>
    <h1>Liste des Utilisateurs</h1>
    <div>
      <button @click="filterByRole('developpeur')">Développeurs</button>
      <button @click="filterByRole('rapporteur')">Rapporteurs</button>
      <button @click="clearFilter">Tous les Utilisateurs</button>
    </div>
    <div v-for="user in filteredUsers" :key="user.id">
      <router-link :to="'/user/' + user.id">{{ user.name }}</router-link>
      <p>Nom: {{ user.nom }} --------- Rôle: {{ user.role }} </p>
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Users',
  data() {
    return {
      users: [],
      filteredUsers: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.errorMessage = '';
      try {
        const response = await axios.get('http://localhost:3000/users', {
          headers: {
            Authorization: this.$store.state.token,
          }
        });
        this.users = response.data;
        console.log('Réponse de la requête:', response);
        this.filteredUsers = this.users;
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        this.errorMessage = 'Erreur lors de la récupération des utilisateurs. Veuillez réessayer plus tard.';
      } finally {
        this.loading = false;
      }
    },
    filterByRole(role) {
      this.filteredUsers = this.users.filter(user => user.role === role);
    },
    clearFilter() {
      this.filteredUsers = this.users;
    }
  }
};
</script>

<style>
</style>
