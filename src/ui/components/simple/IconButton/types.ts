import { JSX } from 'solid-js';

import { IBaseButtonProps } from '../Button';

export interface IBaseIconButtonProps extends IBaseButtonProps {
  iconName: string;
}

export interface IIconButtonProps
  extends IBaseIconButtonProps,
    Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'color' | 'children'> {}

export interface ILinkIconButtonProps
  extends IBaseIconButtonProps,
    Omit<JSX.HTMLAttributes<HTMLAnchorElement>, 'color' | 'children'> {}
