<template>
  <div style="padding-top: 50px">
    <div class="form-container">
      <form @submit.prevent="register">
        <div class="row">
          <!-- Nom input -->
          <div data-mdb-input-init class="form-outline mb-4 col-12">
            <label class="form-label" for="form2Example1">Nom</label>
            <input type="text" id="form2Example1" class="form-control" v-model="nom" />
          </div>

          <!-- Prénom input -->
          <div data-mdb-input-init class="form-outline mb-4 col-12">
            <label class="form-label" for="form2Example2">Prénom</label>
            <input type="text" id="form2Example2" class="form-control" v-model="prenom" />
          </div>
        </div>

        <div class="row">
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4 col-12">
            <label class="form-label" for="form2Example3">Email address</label>
            <input type="email" id="form2Example3" class="form-control" v-model="email" />
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-4 col-12">
            <label class="form-label" for="form2Example4">Password</label>
            <input type="password" id="form2Example4" class="form-control" v-model="mot_de_passe" />
          </div>
        </div>

        <!-- Role switch -->
        <div class="form-check form-switch mb-4">
          <input class="form-check-input" type="checkbox" id="roleSwitch" v-model="isDeveloper">
          <label class="form-check-label" for="roleSwitch">{{ isDeveloper ? 'Développeur' : 'Rapporteur' }}</label>
        </div>

        <!-- Submit button -->
        <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100">S'inscrire</button>

        <div style="padding-bottom: 20px">
          <a v-bind:href="'/login'">Déjà un compte ?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      isDeveloper: false,
      prenom: '',
      nom: '',
      email: '',
      mot_de_passe: '',
    };
  },
  methods: {
    register() {
      let link = 'http://localhost:3000/auth/register'
      let body = {
        nom: this.nom + ' ' + this.prenom,
        email: this.email,
        mot_de_passe: this.mot_de_passe,
        role: this.isDeveloper ? 'developer' : 'reporter',
      }
      let options = {
        headers:{'Authorization': localStorage.getItem('token')}
      }
      axios.post(link, body, options).then(() => {
        this.$router.push('/login');
      }).catch((error) => {
        console.error(error);
      });
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
