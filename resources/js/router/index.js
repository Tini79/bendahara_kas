import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home-page/home-page.vue";

const routes = [
    {
        path: '/home',
        name: 'home.index',
        component: Home
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})