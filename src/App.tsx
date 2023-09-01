import { createSignal } from 'solid-js';
import './App.css';
import { PageWrapper } from './ui/components/PageWrapper';
import Wishes from './ui/pages/wishes/Wishes.tsx';
import { BottomNavigation } from './ui/components/BottomNavigation';
import { AppWrapper } from './ui/components/AppWrapper/AppWrapper.tsx';
import { Modal } from './ui/components/Modals';

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
    <AppWrapper>
      <PageWrapper>
        <Wishes />
      </PageWrapper>

      <BottomNavigation onChangeTheme={changeTheme} onOpenCreateWish={openDialog} />

      {open() && (
        <Modal title="Create wish" onClose={closeDialog}>
          <div style={{ height: '800px' }}>Content</div>
        </Modal>
      )}
    </AppWrapper>
  );
}

export default App;
