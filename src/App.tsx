import { Route, Router, Routes } from '@solidjs/router';
import { createSignal, For } from 'solid-js';

import './App.css';
import { AppWrapper } from './ui/components/AppWrapper/AppWrapper.tsx';
import { BottomNavigation } from './ui/components/BottomNavigation';
import { Modal } from './ui/components/Modal';
import { PageWrapper } from './ui/components/PageWrapper';
import { routes } from './ui/routes/routes.ts';

function App() {
  const [open, setOpen] = createSignal(false);

  const changeTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Router>
      <AppWrapper>
        <PageWrapper>
          <Routes>
            <For each={routes} fallback={<div>Loading...</div>}>
              {(route) => <Route path={route.path} component={route.component} />}
            </For>
            <Route path="*" component={() => <div>Page Not found!!!</div>} />
          </Routes>
        </PageWrapper>

        <BottomNavigation onChangeTheme={changeTheme} onOpenCreateWish={openDialog} />

        <Modal open={open} title="Create wish" onClose={closeDialog}>
          <div
            style={{
              height: '800px',
            }}
          >
            Content
          </div>
        </Modal>
      </AppWrapper>
    </Router>
  );
}

export default App;
