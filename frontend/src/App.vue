<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {Header},
};

import Header from "@/components/Header.vue";
</script>

<style scoped>
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
