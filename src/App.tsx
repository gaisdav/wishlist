import { PageWrapper } from './components/organisms/PageWrapper';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { BottomNavigation, Modal } from './components/molecules';
import { Icon, IconButton } from './components/atoms';
import { useThemeSwitcher } from './hooks/useTheme.tsx';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const { changeTheme } = useThemeSwitcher();

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>

      <BottomNavigation>
        <IconButton onClick={changeTheme}>
          <Icon iconName="grid_view" />
        </IconButton>

        <IconButton onClick={handleOpenModal}>
          <Icon iconName="add" />
        </IconButton>

        <IconButton>
          <Icon iconName="account_circle" />
        </IconButton>
      </BottomNavigation>
      <Modal open={open} title="text" onClose={handleOpenModal}>
        content
      </Modal>
    </>
  );
}

export default App;
