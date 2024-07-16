import { Card as JoyCard } from '@mui/joy';
import cn from 'classnames';
import css from './styles.module.scss';
import { TCardComponent } from './types.ts';
import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren<TCardComponent>> = ({ className, children, ...props }) => {
  const cardClasses = cn(css.card, 'card', className);

  return (
    <JoyCard {...props} className={cardClasses}>
      {children}
    </JoyCard>
  );
};
