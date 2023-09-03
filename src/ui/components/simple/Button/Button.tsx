import { A } from '@solidjs/router';
import cn from 'classnames';
import { Show, splitProps } from 'solid-js';

import css from './styles.module.scss';
import { IButtonProps, ILinkButtonProps } from './types.ts';

export const Button = (args: ILinkButtonProps | IButtonProps) => {
  const [{ class: className = '', color = 'primary', variant = 'contained' }, others] = splitProps(
    args,
    ['class', 'variant', 'color'],
  );

  const buttonClasses = cn(
    css.button,
    {
      [css[variant]]: Boolean(variant),
      [css[color]]: Boolean(color),
    },
    className,
  );

  return (
    <Show
      when={!('href' in others)}
      fallback={
        <A {...(others as ILinkButtonProps)} href={args.href || ''} class={buttonClasses}>
          {others.children}
        </A>
      }
    >
      <button {...(others as IButtonProps)} class={buttonClasses}>
        {others.children}
      </button>
    </Show>
  );
};
