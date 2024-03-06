import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouteError } from 'react-router-dom';

export const ErrorPage: FC<PropsWithChildren> = observer(() => {
  const error = useRouteError();
  const err = error instanceof Error ? error : new Error('Error');

  return (
    <div>
      <p style={{ color: 'red', fontSize: '30px' }}>Error (404?) {err.message}</p>
    </div>
  );
});
