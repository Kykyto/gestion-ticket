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
import User from "@/components/User.vue";
import Users from "@/components/Users.vue";
 
const routes = [
    { path: '/', component: Home, beforeEnter: isNoneAuthGuard },
    { path: '/tickets', component: Tickets, beforeEnter: isNoneAuthGuard},
    { path: '/projets', component: Projets, beforeEnter: isNoneAuthGuard},
    { path: '/clients', component: Clients,beforeEnter: isNoneAuthGuard},
    { path: '/statistiques', component: Statistiques,beforeEnter: isNoneAuthGuard },
    { path: '/login', component: Login,beforeEnter: isAuthGuard },
    { path: '/register', component: Register, beforeEnter: isAuthGuard },
    { path: '/create-ticket', component: CreateTicket,beforeEnter: isNoneAuthGuard },
    { path: '/create-client', component: CreateClient,beforeEnter: isNoneAuthGuard },
    { path: '/create-project', component: CreateProject,beforeEnter: isNoneAuthGuard },
        { path: '/ticket/:id', name: 'Ticket', component: Ticket,beforeEnter: isNoneAuthGuard },
        { path: '/projet/:id', name: 'Projet', component: Projet,beforeEnter: isNoneAuthGuard },
        { path: '/client/:id', name: 'Client', component: Client,beforeEnter: isNoneAuthGuard },
    { path: '/user/:id', name: 'User', component: User,beforeEnter: isNoneAuthGuard },
    { path: '/users', component: Users }
];
// Route Guard checking before getting into the route
function isAuthGuard(to, from, next) {
    if (store.state.token===null) {
        next(); // allow to enter route
    } else {
        next("/"); // go to '/login';
    }
}
function isNoneAuthGuard(to, from, next) {
    if (store.state.token!==null) {
        next(); // allow to enter route
    } else {
        next("/login"); // go to '/login';
    }
}
 
const router = createRouter({
    history: createWebHistory(),
    routes
});
 
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
 
const store = createStore({
    state() {
        return {
            token: null,
        };
    },
    mutations: {
        setToken(state, t) {
            state.token = t;
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== null;
        },
        user(state) {
            return state.token ? JSON.parse(atob(state.token.split('.')[1])) : null;
        }
    },
    plugins: [new VuexPersistence().plugin],
});
 
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');