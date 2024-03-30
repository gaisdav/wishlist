import { FC } from 'react';
import { IIcon } from './types.ts';
import cn from 'classnames';

export const Icon: FC<IIcon> = ({ iconName, className, ...props }) => {
  return (
    <span className={cn('material-icons material-icons-round', className)} {...props}>
      {iconName}
    </span>
  );
};
