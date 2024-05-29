<template>
  <div style="padding-top: 50px">
    <div class="form-container">
      <form @submit.prevent="Login">
        <!-- Email input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form2Example1">Email address</label>
          <input type="email" id="form2Example1" class="form-control" v-model="email"/>
        </div>

        <!-- Password input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Password</label>
          <input type="password" id="form2Example2" class="form-control" v-model="mot_de_passe"/>
        </div>

        <!-- Submit button -->
        <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100">Sign in</button>

        <div style="padding-bottom: 20px">
          <a v-bind:href="'/register'">Pas de compte ?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      mot_de_passe: '',
    };
  },
  methods: {
    Login() {
      axios.post('http://localhost:3000/auth/login', {
        email: this.email,
        mot_de_passe: this.mot_de_passe,
      }).then((response) => {
        console.log(response.data.token)
        localStorage.setItem("token",response.data.token)
        this.$router.push('/');
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
