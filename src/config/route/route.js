import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/HomePage.vue';
import Login from '@/components/pages/LoginPage.vue';
import Register from '@/components/pages/RegisterPage.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;