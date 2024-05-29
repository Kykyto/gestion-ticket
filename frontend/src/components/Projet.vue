<template>
  <div class="container mt-5">
    <h1>Projet : {{ project.name }}</h1>
    <form @submit.prevent="updateProject">
      <div class="mb-3">
        <label for="projectName" class="form-label">Nom du projet</label>
        <input type="text" id="projectName" class="form-control" v-model="project.name" />
      </div>
      <div class="mb-3">
        <label for="projectDescription" class="form-label">Description</label>
        <textarea id="projectDescription" class="form-control" v-model="project.description"></textarea>
      </div>
      <div class="mb-3">
        <label for="clientName" class="form-label">Client</label>
        <input type="text" id="clientName" class="form-control" v-model="project.client.name" disabled />
      </div>
      <button type="submit" class="btn btn-primary">Mettre à jour</button>
      <button type="button" class="btn btn-danger" @click="deleteProject">Supprimer</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Project',
  data() {
    return {
      project: {
        name: '',
        description: '',
        client: {
          name: ''
        }
      },
    };
  },
  mounted() {
    this.fetchProject();
  },
  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;
      axios.get(`http://localhost:3000/projects/${projectId}`)
          .then(response => {
            this.project = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération du projet:', error);
          });
    },
    updateProject() {
      const projectId = this.$route.params.id;
      axios.put(`http://localhost:3000/projects/${projectId}`, {
        name: this.project.name,
        description: this.project.description
      })
          .then(() => {
            alert('Projet mis à jour avec succès');
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour du projet:', error);
          });
    },
    deleteProject() {
      const projectId = this.$route.params.id;
      // REQUETE POUR SUPPRIMER LE PROJET
      axios.delete(`http://localhost:3000/projects/${projectId}`)
          .then(() => {
            alert('Projet supprimé avec succès');
          })
          .catch(error => {
            console.error('Erreur lors de la suppression du projet:', error);
          });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
