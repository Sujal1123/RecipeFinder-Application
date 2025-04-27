import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import PlanPage from "../views/PlanPage.vue";

const routes = [
 {
    path: '/',
    name: 'Home',
    component: Home,
 },
 {
    path: '/planmeal',
    name: 'PlanMeal',
    component: PlanPage,
 }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;