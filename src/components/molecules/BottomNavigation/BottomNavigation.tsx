import { FC, PropsWithChildren } from 'react';
import { IBottomNavigation } from './types.ts';

export const BottomNavigation: FC<PropsWithChildren<IBottomNavigation>> = ({ className, children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);
