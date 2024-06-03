<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="form-container">
      <form @submit.prevent="updateTicket">
        <!-- Ticket Title input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="title">Titre</label>
          <input type="text" id="title" class="form-control" v-model="ticket.titre" required />
        </div>

        <!-- Description input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="description">Description</label>
          <textarea id="description" class="form-control" v-model="ticket.description" required></textarea>
        </div>

        <!-- Status selection -->
        <div class="form-outline mb-4">
          <label class="form-label" for="status">Statut</label>
          <select id="status" class="form-select" v-model="ticket.statut" required>
            <option value="Non démarré">Non démarré</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4 w-100">Mettre à jour le ticket</button>
        <button type="button" class="btn btn-danger btn-block mb-4 w-100" @click="deleteTicket">Supprimer le ticket</button>
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
    const deleteTicket = () => {
      if(confirm('Etes-vous sûr de vouloir supprimer ce ticket ?')) {
        const ticketId = route.params.id;
      axios.delete(`http://localhost:3000/tickets/${ticketId}`)
          .then(response => {
            console.log('Ticket supprimé avec succès:', response.data);
            router.push('/tickets');  // Redirige vers la liste des tickets après la mise à jour
          })
          .catch(error => {
            console.error('Erreur lors de la suppression du ticket:', error);
          });
      }
    };
   
    const fetchTicket = () => {
      const ticketId = route.params.id;
      axios.get(`http://localhost:3000/tickets/${ticketId}`)
          .then(response => {
            ticket.value = response.data.ticket;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération du ticket:', error);
          });
    };

    const updateTicket = () => {
      const ticketId = route.params.id;  
      axios.put(`http://localhost:3000/tickets/${ticketId}`, ticket.value)
          .then(response => {
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
      updateTicket,
      deleteTicket
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
