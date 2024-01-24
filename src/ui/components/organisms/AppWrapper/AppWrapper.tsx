import css from './styles.module.scss';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AppWrapper: FC = () => {
  // const { mode, setMode } = useColorScheme();
  // const handleSwitchTheme = () => {
  //   setMode(mode === 'light' ? 'dark' : 'light');
  // };

  return (
    <div className={css['page-wrapper']}>
      <Outlet />

      {/*<BottomNavigation onSwitchTheme={handleSwitchTheme} />*/}
    </div>
  );
};
