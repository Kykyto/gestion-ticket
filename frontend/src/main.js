import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import Home from "@/components/Home.vue";
import Tickets from "@/components/Tickets.vue";
import Projets from "@/components/Projets.vue";
import Clients from "@/components/Clients.vue";
import Statistiques from "@/components/Statistiques.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import CreateTicket from "@/components/CreateTicket.vue";
import CreateClient from "@/components/CreateClient.vue";
import CreateProject from "@/components/CreateProject.vue";
import Ticket from "@/components/Ticket.vue";
import Projet from "@/components/Projet.vue";
import Client from "@/components/Client.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/tickets', component: Tickets },
    { path: '/projets', component: Projets },
    { path: '/clients', component: Clients},
    { path: '/statistiques', component: Statistiques },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/create-ticket', component: CreateTicket },
    { path: '/create-client', component: CreateClient },
    { path: '/create-project', component: CreateProject },
    { path: '/ticket/:id', name: 'Ticket', component: Ticket },
    { path: '/project/:id', name: 'Project', component: Projet },
    { path: '/client/:id', name: 'Client', component: Client }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
