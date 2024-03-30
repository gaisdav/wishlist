import css from './styles.module.scss';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from 'hooks/useStore.tsx';
import { Snackbar } from 'components/atoms';
import { observer } from 'mobx-react-lite';

export const AppWrapper: FC = observer(() => {
  const { notification, removeNotification } = useStore('notification');

  return (
    <>
      <div className={css['page-wrapper']}>
        <Outlet />
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!notification}
        autoHideDuration={notification?.duration || 1500}
        onClose={removeNotification}
        color={notification?.type || 'success'}
      >
        {notification?.message}
      </Snackbar>
    </>
  );
});
