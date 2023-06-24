import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    commonjs(),
  ],
  build: {
    rollupOptions: {
      plugins: [ nodePolyfills()],
    }
  }
});