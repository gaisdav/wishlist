import cn from 'classnames';
import { splitProps } from 'solid-js';

import css from './styles.module.scss';
import { IIconButtonProps, ILinkIconButtonProps } from './types.ts';
import { Button, IButtonProps, ILinkButtonProps } from '../Button';

export const IconButton = (_props: IIconButtonProps | ILinkIconButtonProps) => {
  const [{ class: className = '', iconName, href }, others] = splitProps(_props, [
    'class',
    'iconName',
    'href',
  ]);

  const classes = cn(css['icon-button'], className);

  return (
    <Button {...(others as ILinkButtonProps | IButtonProps)} href={href} class={classes}>
      <span class="material-symbols-rounded">{iconName}</span>
    </Button>
  );
};
