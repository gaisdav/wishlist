import { IComponent } from '../../common/types.ts';

export interface IBottomNavigationProps {
  className?: string;
  onOpenCreateWish?: () => void;
  onChangeTheme?: () => void;
}

export type TBottomNavigationComponent = IComponent<IBottomNavigationProps, HTMLDivElement>;
