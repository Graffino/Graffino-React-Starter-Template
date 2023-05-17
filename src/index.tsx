import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@styles/global.scss';
import ThemeCtxProvider from './contexts/ThemeCtx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeCtxProvider>
        <App />
      </ThemeCtxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
