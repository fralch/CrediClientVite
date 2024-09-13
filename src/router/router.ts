// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Login from '../views/Login.vue';
import ValidarDNI from '../views/ValidarDNI.vue';
import Registrar from '../views/Registro.vue';

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
    path: '/validardni',
    name: 'ValidarDNI',
    component: ValidarDNI,
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
