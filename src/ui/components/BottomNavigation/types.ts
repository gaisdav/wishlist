import { IComponent } from '../../common';

export interface IBottomNavigationProps {
  onOpenCreateWish?: () => void;
  onChangeTheme?: () => void;
}

export type TBottomNavigationComponent = IComponent<IBottomNavigationProps, HTMLDivElement>;
