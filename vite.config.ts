import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// The code is written against React, but production ships Preact (~4 KB)
// through its compatibility layer instead of react-dom (~60 KB).
const preact = {
  'react-dom/client': 'preact/compat/client',
  'react-dom/server': 'preact/compat/server',
  'react-dom': 'preact/compat',
  'react/jsx-runtime': 'preact/jsx-runtime',
  'react/jsx-dev-runtime': 'preact/jsx-dev-runtime',
  react: 'preact/compat',
};

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Dev keeps real React for its fast refresh and error overlay.
    alias: command === 'build' ? Object.entries(preact).map(([find, replacement]) => ({ find: new RegExp(`^${find}$`), replacement })) : [],
  },
  ssr: {
    noExternal: command === 'build' ? true : [],
  },
}));
