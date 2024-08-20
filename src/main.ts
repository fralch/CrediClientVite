// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './index.css'; // Importar el archivo CSS aquí
import router from './router/router';

const app = createApp(App);

app.use(router);
app.mount('#app');
