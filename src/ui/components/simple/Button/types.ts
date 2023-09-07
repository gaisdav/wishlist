import { JSX } from 'solid-js';

import { ERoute } from '../../../routes/types.ts';

export interface IBaseButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  href?: ERoute;
}

export interface IButtonProps
  extends IBaseButtonProps,
    Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'color'> {}

export interface ILinkButtonProps
  extends IBaseButtonProps,
    Omit<JSX.HTMLAttributes<HTMLAnchorElement>, 'color'> {}
