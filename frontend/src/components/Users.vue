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
      <p>Rôle: {{ user.role }}</p>
    </div>
  </div>
</template>

<script>
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
    fetchUsers() {
      // Faites une requête API pour récupérer la liste des utilisateurs
      // Assurez-vous de stocker la réponse dans this.users
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
