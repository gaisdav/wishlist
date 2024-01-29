import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { theme } from './theme.ts';
import { Store } from '../store';
import { AppStateProvider } from './providers';
import { initRoutes } from '../routes';
import { RouterProvider } from 'react-router-dom';

const storeInstance = new Store();
const store = storeInstance.viewModels;
const routes = initRoutes(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="system" theme={theme}>
      <CssBaseline />
      <AppStateProvider store={store}>
        <RouterProvider router={routes} />
      </AppStateProvider>
    </CssVarsProvider>
  </React.StrictMode>,
);
