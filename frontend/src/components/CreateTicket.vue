<script>
import axios from 'axios';

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
        createdDate: '',
        userId: ''
      },
      clients: [],
      projects: []
    };
  },
  created() {
    this.fetchUserId();
  },
  methods: {
    fetchUserId() {
      const token = localStorage.getItem('token');
      if (token) {
        // Décoder le token JWT pour obtenir l'ID de l'utilisateur
        // Utilisez la bibliothèque jwt-decode ou une méthode similaire
        const decodedToken = jwt_decode(token);
        this.ticket.userId = decodedToken.userId;
      }
    },
    submitTicket() {
      this.ticket.createdDate = new Date().toISOString();
      // REQUETE POUR SOUMETTRE LE TICKET AVEC L'ID DE L'UTILISATEUR QUI L'A CREE
      axios.post('http://localhost:3000/tickets', this.ticket)
          .then(response => {
            console.log('Ticket soumis avec succès:', response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la soumission du ticket:', error);
          });
    }
  }
}
</script>
