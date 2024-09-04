import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/', // Asegúrate de que la URL base sea correcta
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
