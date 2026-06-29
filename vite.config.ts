import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-i18next') || id.includes('node_modules/i18next')) {
            return 'i18n'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'animations'
          }
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
