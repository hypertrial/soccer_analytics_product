import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/soccer_analytics_product/',
  server: {
    open: true,
    port: 3000,
  },
});
