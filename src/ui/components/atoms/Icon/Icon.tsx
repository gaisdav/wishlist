import { FC } from 'react';
import { IIcon } from './types.ts';
import cn from 'classnames';
import css from './styles.module.scss';

export const Icon: FC<IIcon> = ({ iconName, className, size = 'md', ...props }) => {
  const cls = cn('material-icons material-icons-round', css[size], className);

  return (
    <span className={cls} {...props}>
      {iconName}
    </span>
  );
};
