import { IComponent } from '../../common/types.ts';

export interface IButtonProps {
  color?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  variant?: 'contained' | 'outlined';
}

export type TButtonComponent = IComponent<IButtonProps, HTMLButtonElement>;
