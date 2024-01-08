import { HTMLAttributes } from 'react';

export interface IBottomNavigationProps {
  onOpenCreateWish?: () => void;
  onSwitchTheme?: () => void;
}

export type TBottomNavigationComponent = IBottomNavigationProps &
  HTMLAttributes<HTMLDivElement>;
