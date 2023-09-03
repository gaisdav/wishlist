import cn from 'classnames';
import { splitProps } from 'solid-js';

import css from './styles.module.scss';
import { TCardComponent } from './types.ts';

export const Card: TCardComponent = (_props) => {
  const [{ class: className = '' }, others] = splitProps(_props, ['class']);

  const cardClasses = cn(css.card, className);

  return <div class={cardClasses}>{others.children}</div>;
};
