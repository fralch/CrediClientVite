// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Login from '../views/Login.vue';
import Registrar from '../views/Registrar.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: HelloWorld,
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
