import { FC } from 'react';
import cn from 'classnames';
import { Avatar as JoyAvatar } from '@mui/joy';
import { IAvatar } from './types.ts';
import css from './styles.module.scss';

export const Avatar: FC<IAvatar> = ({ className, size = 'lg', ...props }) => {
  return <JoyAvatar {...props} className={cn(css.avatar, className)} size={size} />;
};
