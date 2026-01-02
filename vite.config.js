import { defineConfig } from 'vite';

export default defineConfig({
  base: '/maiia-web/',

  root: '.',

  server: {
    host: true,
    port: 5173,
  },
});
