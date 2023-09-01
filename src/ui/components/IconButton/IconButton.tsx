import { TIconButtonComponent } from './types.ts';
import css from './styles.module.scss';
import cn from 'classnames';

export const IconButton: TIconButtonComponent = ({ className, iconName, ...props }) => {
  const classes = cn(css['icon-button'], className);

  return (
    <button class={classes} {...props}>
      <span class="material-symbols-rounded">{iconName}</span>
    </button>
  );
};
