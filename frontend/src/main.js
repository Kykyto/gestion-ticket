import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import Home from "@/components/Home.vue";
import Tickets from "@/components/Tickets.vue";
import Projets from "@/components/Projets.vue";
import Clients from "@/components/Clients.vue";
import Statistiques from "@/components/Statistiques.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/tickets', component: Tickets },
    { path: '/projets', component: Projets },
    { path: '/clients', component: Clients},
    { path: '/statistiques', component: Statistiques }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
