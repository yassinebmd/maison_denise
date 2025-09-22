import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SnackbarProvider maxSnack={3}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>
);
