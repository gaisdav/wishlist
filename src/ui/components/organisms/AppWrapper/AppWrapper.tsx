import css from './styles.module.scss';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Snackbar } from 'components/atoms';
import { observer } from 'mobx-react-lite';
import { ErrorBoundary } from 'components/organisms/ErrorBoundary';
import { useRouteStore } from 'hooks/useRouteStore.tsx';

export const AppWrapper: FC = observer(() => {
  const {
    notification: { notification, removeNotification },
  } = useRouteStore();

  return (
    <>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
});
