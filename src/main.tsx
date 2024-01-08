import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './ui/routes/routes.tsx';
import { PageWrapper } from './ui/components/organisms/PageWrapper';
import { BottomNavigation } from './ui/components/molecules/BottomNavigation';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  cssVarPrefix: 'wl',
  components: {
    JoyCard: {
      defaultProps: {
        variant: 'soft',
      },
    },
    JoyButton: {
      defaultProps: {
        variant: 'soft',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="system" theme={theme}>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>

      <BottomNavigation />
    </CssVarsProvider>
  </React.StrictMode>,
);
