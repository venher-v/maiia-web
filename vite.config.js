import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    host: true, // дозволяє підключатися з телефону
    port: 5173
  }
});
