<template>
  <div class="welcome-container">
    <h1 class="welcome-text">Bienvenue</h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.welcome-container {
  position: relative;
  width: 100%;
  height: 800px;
  background-image: url('https://www.adecco.com/en-us/-/media/project/adecco/adeccous/resources/benefits-for-workers-and-employers-who-return-to-work-header.jpg?h=800&iar=0&w=1920&hash=C26F834AF70384665C47049C19FEBFF8');
  background-size: cover;
  background-position: center;
}

.welcome-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
