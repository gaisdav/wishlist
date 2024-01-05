import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './ui/routes/routes.tsx';
import { PageWrapper } from './ui/components/PageWrapper';
import { BottomNavigation } from './ui/components/BottomNavigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageWrapper>
      <RouterProvider router={router} />
    </PageWrapper>

    <BottomNavigation />
  </React.StrictMode>,
);
