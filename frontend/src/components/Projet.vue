<template>
  <div class="container mt-5">
    <h1>Projet : {{ project.nom }}</h1>
    <form @submit.prevent="updateProject">
      <div class="mb-3">
        <label for="projectName" class="form-label">Nom du projet</label>
        <input type="text" id="projectName" class="form-control" v-model="project.nom" />
      </div>
      <div class="mb-3">
        <label for="projectDescription" class="form-label">Description</label>
        <textarea id="projectDescription" class="form-control" v-model="project.description"></textarea>
      </div>
      <div class="mb-3">
        <label for="clientName" class="form-label">Client</label>
        <input type="text" id="clientName" class="form-control" v-model="project.client_id" disabled />
      </div>
      <button type="submit" class="btn btn-primary">Mettre à jour</button>
      <button type="button" class="btn btn-danger" @click="deleteProject">Supprimer</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'ProjectView',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const project = ref({
      id: '',
      nom: '',
      description: '',
      client_id: ''
    });

    const deleteProject = () => {
      if (confirm('Etes-vous sûr de vouloir supprimer ce projet ?')) {
        const projectId = route.params.id;
        axios.delete(`http://localhost:3000/projects/${projectId}`)
          .then(response => {
            console.log('Projet supprimé avec succès:', response.data);
            router.push('/projects');  // Redirige vers la liste des projets après la suppression
          })
          .catch(error => {
            console.error('Erreur lors de la suppression du projet:', error);
          });
      }
    };

    const fetchProject = () => {
      const projectId = route.params.id;
      axios.get(`http://localhost:3000/projects/${projectId}`)
        .then(response => {
          project.value = response.data.project;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du projet:', error);
        });
    };

    const updateProject = () => {
      const projectId = route.params.id;
      axios.put(`http://localhost:3000/projects/${projectId}`, project.value)
        .then(response => {
          router.push('/projects');  // Redirige vers la liste des projets après la mise à jour
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour du projet:', error);
        });
    };

    onMounted(() => {
      fetchProject();
    });

    return {
      project,
      updateProject,
      deleteProject
    };
  }
}

</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
