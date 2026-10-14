import { renderToString } from 'react-dom/server';
import './i18n';
import App from './App';

export function render() {
  return renderToString(<App />);
}
