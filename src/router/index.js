import { createRouter, createWebHistory } from 'vue-router';
import ApplicationStatus from '../components/ApplicationStatus.vue';

const routes = [{
    path: '/application-status/:dealId',
    name: 'ApplicationStatus',
    component: ApplicationStatus,
    props: true, // Esto permite pasar el parámetro dealId como prop
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;