<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" v-bind:href="'/'">Gestionnaire de tickets</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" v-bind:href="'/tickets'">Tickets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-bind:href="'/projets'">Projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-bind:href="'/clients'">Clients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-bind:href="'/statistiques'">Statistiques</a>
          </li>
        </ul>
      </div>
      <div v-if="userId===0" class="ml-auto">
        <router-link to="/create-ticket" class="btn btn-primary">Gérer les utilisateurs</router-link>
      </div>
      <div v-if="userLoggedIn" class="ml-auto">
        <router-link to="/create-ticket" class="btn btn-primary">Créer un ticket</router-link>
      </div>
      <div v-if="userLoggedIn" class="ml-auto">
        <router-link to="/login" class="btn btn-primary" style="margin-left: 10px">Se déconnecter</router-link>
      </div>
      <div v-if="userLoggedIn" class="ml-auto" style="margin-left: 10px; margin-right: 20px">
        <router-link :to="'/user/' + userId" class="btn btn-secondary" style="margin-left: 10px">Profil</router-link>
      </div>
      <div v-else class="ml-auto">
        <router-link to="/login" class="btn btn-primary">Se connecter</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userLoggedIn: false,
      userId: ''
    }
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        this.userLoggedIn = true;
        // Récupérer les informations de l'utilisateur à partir du token ou de l'API
        this.userId = '' // RECUPERER L'USERID AVEC LE TOKEN
      } else {
        this.userLoggedIn = false;
      }
    }
  }
};
</script>

<style scoped>
.container-fluid {
  width: 100vw;
}
</style>
