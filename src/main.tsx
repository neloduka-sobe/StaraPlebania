import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { restoreLanguage } from './i18n';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML is prerendered (scripts/prerender.js); dev starts empty.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

restoreLanguage();
