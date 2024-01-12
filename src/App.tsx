import { useColorScheme } from '@mui/joy';
import { PageWrapper } from './components/organisms/PageWrapper';
import { Link, RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { BottomNavigation, Modal } from './components/molecules';
import { Icon, IconButton } from './components/atoms';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const { mode, setMode } = useColorScheme();

  const handleSwitchTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>

      <BottomNavigation>
        <IconButton onClick={handleSwitchTheme} component={Link}>
          <Icon iconName="grid_view" />
        </IconButton>

        <IconButton onClick={handleOpenModal}>
          <Icon iconName="add" />
        </IconButton>

        <IconButton component={Link}>
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
