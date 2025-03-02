import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), compression({ algorithm: "brotliCompress" })],
  optimizeDeps: {
    include: ['framer-motion', 'react-i18next'],
    exclude: ['lucide-react'],
  },
  build: {
    minify: "esbuild",
    treeshake: true,
  },
});
