import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      '@stInfo': '/src/stInfo',
      '@stInfo/assets': '/src/setInfo/assets',
      '@stList': '/src/stList',
      '@stList/assets': '/src/stList/assets',
    },
  },
});
