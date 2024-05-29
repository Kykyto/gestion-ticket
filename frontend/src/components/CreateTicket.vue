<template>
  <div style="padding-top: 50px">
    <div class="form-container">
      <form>
        <!-- Titre du ticket -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="ticketTitle">Titre</label>
          <input type="text" id="ticketTitle" class="form-control" v-model="ticket.title" />
        </div>

        <!-- Sélection du client -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="clientSelect">Client</label>
          <select id="clientSelect" class="form-control" v-model="ticket.client">
            <option v-for="client in clients" :key="client.id" :value="client.name">{{ client.name }}</option>
          </select>
        </div>

        <!-- Sélection du projet -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="projectSelect">Projet</label>
          <select id="projectSelect" class="form-control" v-model="ticket.project">
            <option v-for="project in projects" :key="project.id" :value="project.name">{{ project.name }}</option>
          </select>
        </div>

        <!-- Sélection du statut -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="statusSelect">Statut</label>
          <select id="statusSelect" class="form-control" v-model="ticket.status">
            <option value="Non démarré">Non démarré</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>

        <!-- Description -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="description">Description</label>
          <textarea id="description" class="form-control" v-model="ticket.description"></textarea>
        </div>

        <!-- Submit button -->
        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100" @click="submitTicket">Créer le ticket</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTicket',
  data() {
    return {
      ticket: {
        title: '',
        client: '',
        project: '',
        status: 'Non démarré',
        description: '',
        createdDate: ''
      },
      clients: [
        { id: 1, name: 'Client A' },
        { id: 2, name: 'Client B' },
        // REQUETE POUR RECUPERER L'ID ET LE NOM DES CLIENTS
      ],
      projects: [
        { id: 1, name: 'Projet 1' },
        { id: 2, name: 'Projet 2' },
        // REQUETE POUR RECUPERER L'ID ET LE NOM DES PROJETS
      ]
    };
  },
  methods: {
    submitTicket() {
      this.ticket.createdDate = new Date().toISOString(); // Récupère la date actuelle au format ISO
      // Logique pour soumettre le ticket
      console.log('Ticket soumis:', this.ticket);
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
