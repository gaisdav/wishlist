import { TCardComponent } from './types.ts';
import cn from 'classnames';
import css from './styles.module.scss';

export const Card: TCardComponent = ({ className, children }) => {
  const cardClasses = cn(css.card, className);

  return <div class={cardClasses}>{children}</div>;
};
