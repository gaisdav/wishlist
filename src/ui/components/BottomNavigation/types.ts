import { IComponent } from '../../common/types.ts';

export interface IBottomNavigationProps {
  onOpenCreateWish?: () => void;
  onChangeTheme?: () => void;
}

export type TBottomNavigationComponent = IComponent<IBottomNavigationProps, HTMLDivElement>;
