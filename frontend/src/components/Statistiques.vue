<template>
  <div class="container mt-5">
    <h1>Statistiques</h1>

    <div class="mb-5">
      <h2>Statistiques globales</h2>
      <p>Nombre de tickets traités dans le dernier mois : {{ totalTicketsLastMonth }}</p>
      <p>Nombre de tickets traités par personne :</p>
      <ul>
        <li v-for="userStat in usersStats" :key="userStat.userId">
          {{ userStat.userName }} : {{ userStat.ticketCount }}
        </li>
      </ul>
    </div>

    <div class="mb-3">
      <label for="selectUser" class="form-label">Sélectionner un utilisateur :</label>
      <select id="selectUser" class="form-select" v-model="selectedUser">
        <option value="">Tous les utilisateurs</option>
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>

    <div v-if="selectedUser">
      <h2>Statistiques pour {{ selectedUserName }}</h2>
      <p>Nombre de tickets traités dans le dernier mois : {{ userTicketsLastMonth }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Statistics',
  data() {
    return {
      totalTicketsLastMonth: 0,
      usersStats: [],
      selectedUser: null,
      users: [], // Liste des utilisateurs
      userTicketsLastMonth: 0
    };
  },
  mounted() {
    this.fetchGlobalStatistics();
    this.fetchUsers();
  },
  methods: {
    // RECUPERER LE NOMBRE DE TICKETS TRAITES DANS LE DERNIER MOIS
    fetchGlobalStatistics() {
      // Fetch global statistics data from backend and update data properties
    },
    // RECUPERER TOUS LES UTILISATEURS (DEV ET RAPPORTEURS)
    fetchUsers() {
      // Fetch list of users from backend and update users data property
    },
    // RECUPERER LE NOMBRE DE TICKETS TRAITES DANS LE DERNIER MOIS PAR UN UTILISATEUR VIA SON ID
    fetchUserStatistics(userId) {
      // Fetch user specific statistics data from backend based on userId and update data properties
    }
  },
  watch: {
    selectedUser(newValue) {
      if (newValue) {
        this.fetchUserStatistics(newValue);
      }
    }
  }
};
</script>
