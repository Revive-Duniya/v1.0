import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Update import statement

export default defineConfig({
  plugins: [react(), nodePolyfills()],
});
