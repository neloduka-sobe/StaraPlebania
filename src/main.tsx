import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { languageFromPath, loadLanguage, restoreLanguage } from './i18n';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Each language has its own prerendered page; load its translations
// before hydrating so the markup matches.
void loadLanguage(languageFromPath(location.pathname)).then(() => {
  // Production HTML is prerendered (scripts/prerender.js); dev starts empty.
  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }

  restoreLanguage();
});
