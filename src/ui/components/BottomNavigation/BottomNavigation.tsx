import { FC } from 'react';
import { TBottomNavigationComponent } from './types.ts';
import { Button } from '../simple';

export const BottomNavigation: FC<TBottomNavigationComponent> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Button>a</Button>
      <Button>a</Button>
      <Button>a</Button>
    </div>
  );
};
