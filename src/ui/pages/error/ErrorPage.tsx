import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouteError } from 'react-router-dom';

export const ErrorPage: FC<PropsWithChildren> = observer(() => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p style={{ color: 'red', fontSize: '30px' }}>Error (404?)</p>
    </div>
  );
});
