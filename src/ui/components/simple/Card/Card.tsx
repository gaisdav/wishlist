import cn from 'classnames';

import css from './styles.module.scss';
import { TCardComponent } from './types.ts';
import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren<TCardComponent>> = ({
  className,
  children,
}) => {
  const cardClasses = cn(css.card, className);

  return <div className={cardClasses}>{children}</div>;
};
