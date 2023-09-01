import { IComponent } from '../../common/types.ts';

export interface IIconButtonProps {
  className?: string;
  iconName: string;
}

export type TIconButtonComponent = IComponent<IIconButtonProps, HTMLButtonElement>;
