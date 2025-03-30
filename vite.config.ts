import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from "vite-plugin-compression";
import { ssr } from 'vite-plugin-ssr/plugin';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    compression({ algorithm: "brotliCompress" }), 
    ssr({
      prerender: true
    })
  ],
  optimizeDeps: {
    include: ['framer-motion', 'react-i18next'],
    exclude: ['lucide-react'],
  },
  build: {
    minify: "esbuild",
    treeshake: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
});