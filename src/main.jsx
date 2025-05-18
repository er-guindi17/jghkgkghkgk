
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import '@/index.css';
import { Toaster } from '@/components/ui/toaster.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
