import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@src', replacement: '/src' },
      { find: '@stInfo', replacement: '/src/stInfo' },
      { find: '@stInfo/assets', replacement: '/src/setInfo/assets' },
      { find: '@stList', replacement: '/src/stList' },
      { find: '@stList/assets', replacement: '/src/stList/assets' },
    ],
  },
});
