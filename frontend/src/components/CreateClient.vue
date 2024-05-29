<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <!-- Company Name input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="companyName">Nom de l'entreprise</label>
          <input type="text" id="companyName" class="form-control" v-model="companyName" required />
        </div>

        <!-- Address input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="address">Adresse</label>
          <input type="text" id="address" class="form-control" v-model="address" required />
        </div>

        <!-- Email input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="email">Adresse email</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>

        <!-- Phone number input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="phone">Numéro de téléphone</label>
          <input type="tel" id="phone" class="form-control" v-model="phone" required />
        </div>

        <!-- Submit button -->
        <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100">Créer le client</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateClient',
  data() {
    return {
      companyName: '',
      address: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    submitForm() {
      // CHANGER L'URL POUR LE POST AVEC UN URL CORRECT
      axios.post('http://localhost:3000/clients', {
        companyName: this.companyName,
        address: this.address,
        email: this.email,
        phone: this.phone,
      }).then((response) => {
        console.log('Client créé avec succès:', response.data);
        this.resetForm();
      }).catch((error) => {
        console.error('Erreur lors de la création du client:', error);
      });
    },
    resetForm() {
      this.companyName = '';
      this.address = '';
      this.email = '';
      this.phone = '';
    }
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
