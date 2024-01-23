import css from './styles.module.scss';
import { FC, useState } from 'react';
import { BottomNavigation, Modal } from '../../molecules';
import { useColorScheme } from '@mui/joy';
import { Outlet } from 'react-router-dom';

export const AppWrapper: FC = () => {
  const [open, setOpen] = useState(false);

  const { mode, setMode } = useColorScheme();

  const handleSwitchTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <div className={css['page-wrapper']}>
      <Outlet />

      <BottomNavigation onSwitchTheme={handleSwitchTheme} />
      <Modal open={open} title="text" onClose={handleOpenModal}>
        content
      </Modal>
    </div>
  );
};
