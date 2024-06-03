<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <template v-if="this.$store.getters.isAuthenticated">
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
      <div v-if="isAdmin" class="ml-auto">
        <router-link to="/users" class="btn btn-primary">Gérer les utilisateurs</router-link>
      </div>
      <div  class="ml-auto">
        <router-link to="/create-ticket" class="btn btn-primary">Créer un ticket</router-link>
      </div>
      <div class="ml-auto">
        <button class="btn btn-primary" style="margin-left: 10px" @click="logout">Se déconnecter</button>
      </div>
      <div class="ml-auto" style="margin-left: 10px; margin-right: 20px"> 
        <router-link :to="'/user/' + this.$store.getters.user.userId" class="btn btn-secondary" style="margin-left: 10px">Profil</router-link>
      </div>
    </template>
      <div v-else class="ml-auto">
        <router-link to="/login" class="btn btn-primary">Se connecter</router-link>
      </div>
    </div>
  </nav>
  {{ JSON.stringify(this.$store.getters.user) }}
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    userId() {
      return this.$store.getters.user ? this.$store.getters.user.userId : null;
    },
    isAdmin() {
      return this.$store.getters.user && this.$store.getters.user.userId === 'Admin';
    }
  },
  methods: {
    logout() {
      this.$store.commit('setToken', null);
      this.$router.push('/login');
    }
  }
}
</script>


<style scoped>
.container-fluid {
  width: 100vw;
}
</style>
