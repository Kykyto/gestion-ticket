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
      <div v-if="userLoggedIn" class="ml-auto">
        <button class="btn btn-primary">Créer un ticket</button>
      </div>
      <div v-if="userLoggedIn" class="ml-auto" style="margin-left: 20px;">
        <p class="navbar-text mb-0">Bienvenue {{ username }}</p>
      </div>
      <div v-else class="ml-auto">
        <button class="btn btn-primary">S'enregistrer</button>
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
      username: '',
    }
    // J'ai aucune idée de comment communiquer avec le back pour récupérer l'état de connexion et l'username
  }
};
</script>

<style scoped>
.container-fluid {
  width: 100vw;
}
</style>
