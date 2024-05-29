<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="form-container">
      <form @submit.prevent="updateTicket">
        <!-- Ticket ID (hidden) -->
        <input type="hidden" v-model="ticket.id" />

        <!-- Ticket Title input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="title">Titre</label>
          <input type="text" id="title" class="form-control" v-model="ticket.title" required />
        </div>

        <!-- Description input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="description">Description</label>
          <textarea id="description" class="form-control" v-model="ticket.description" required></textarea>
        </div>

        <!-- Status selection -->
        <div class="form-outline mb-4">
          <label class="form-label" for="status">Statut</label>
          <select id="status" class="form-select" v-model="ticket.status" required>
            <option value="Non démarré">Non démarré</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>

        <!-- Client (readonly) -->
        <div class="form-outline mb-4">
          <label class="form-label" for="client">Client</label>
          <input type="text" id="client" class="form-control" :value="ticket.client?.name" readonly />
        </div>

        <!-- Project (readonly) -->
        <div class="form-outline mb-4">
          <label class="form-label" for="project">Projet</label>
          <input type="text" id="project" class="form-control" :value="ticket.project?.name" readonly />
        </div>

        <!-- Progress Description input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="progressDescription">Description de l'avancement</label>
          <textarea id="progressDescription" class="form-control" v-model="progressDescription" required></textarea>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4 w-100">Mettre à jour le ticket</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'TicketView',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const ticket = ref({
      id: '',
      title: '',
      description: '',
      status: '',
      client: null,
      project: null,
    });
    const progressDescription = ref('');

    const fetchTicket = () => {
      const ticketId = route.params.id;
      // CHANGER L'URL POUR RECUPERER LE TICKET
      axios.get(`http://localhost:3000/tickets/${ticketId}`)
          .then(response => {
            ticket.value = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération du ticket:', error);
          });
      // RAJOUTER UN FETCH POUR RECUPERER LE CLIENT ET LE PROJET LIES AU TICKET
    };

    const updateTicket = () => {
      const ticketId = route.params.id;
      const updatedTicket = {
        title: ticket.value.title,
        description: ticket.value.description,
        status: ticket.value.status,
        progressDescription: progressDescription.value,
        modifiedDate: new Date().toISOString()
      };

      // MODIFIER L'URL POUR POUVOIR UPDATE LE TICKET
      axios.put(`http://localhost:3000/tickets/${ticketId}`, updatedTicket)
          .then(response => {
            console.log('Ticket mis à jour avec succès:', response.data);
            router.push('/tickets');  // Redirige vers la liste des tickets après la mise à jour
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour du ticket:', error);
          });
    };

    onMounted(() => {
      fetchTicket();
    });

    return {
      ticket,
      progressDescription,
      updateTicket
    };
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
