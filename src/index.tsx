import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './normalize.scss';

// @ts-ignore
window.AppVersion = APP_VERSION; // запись версии в window

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
