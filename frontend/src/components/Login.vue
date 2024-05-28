<template>
  <div style="padding-top: 50px">
    <div class="form-container">
      <form>
        <!-- Email input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form2Example1">Email address</label>
          <input type="email" id="form2Example1" class="form-control" />
        </div>

        <!-- Password input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Password</label>
          <input type="password" id="form2Example2" class="form-control" />
        </div>

        <!-- Submit button -->
        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 w-100">Sign in</button>

        <div style="padding-bottom: 20px">
          <a v-bind:href="'/register'">Pas de compte ?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
