import { TButtonComponent } from './types.ts';
import cn from 'classnames';

import css from './styles.module.scss';

export const Button: TButtonComponent = ({
  variant = 'contained',
  color = 'primary',
  href,
  className = '',
  children,
  ...props
}) => {
  {
    const buttonClasses = cn(
      css.button,
      {
        [css[variant]]: Boolean(variant),
        [css[color]]: Boolean(color),
      },
      className,
    );

    // if (href) {
    //   return (
    //     <a href={href} class={buttonClasses} {...props}>
    //       {children}
    //     </a>
    //   );
    // }

    return (
      <button class={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
};
