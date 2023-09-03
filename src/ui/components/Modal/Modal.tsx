import cn from 'classnames';
import { createEffect, createSignal, onCleanup, Show, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';

import css from './styles.module.scss';
import { TModalComponent } from './types.ts';
import { breakpoints } from '../../common';
import { Button, IconButton } from '../simple';

export const Modal: TModalComponent = (_props) => {
  const [props, others] = splitProps(_props, ['open', 'title', 'onClose', 'className', 'children']);
  let timerHandle: number;
  const [opened, setOpened] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);

  const contentClasses = cn(
    css['content-wrapper'],
    window.innerWidth > breakpoints.md ? [css['desktop']] : css['mobile'],
  );

  createEffect(() => {
    const isOpen = props.open();

    if (isOpen) {
      setOpened(true);
      setMounted(true);
    } else {
      setMounted(false);
      timerHandle = window.setTimeout(() => setOpened(false), 300);
    }
  });

  onCleanup(() => {
    clearTimeout(timerHandle);
  });

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <Show when={opened()} fallback={null}>
      <Portal>
        <div
          class={cn(
            css['modal'],
            {
              [css['mounted']]: mounted() && opened(),
              [css['unmounted']]: !mounted() && opened(),
            },
            props.className,
          )}
          {...others}
        >
          <div class={css['layout']} onClick={handleClose} />

          <div class={contentClasses}>
            <header class={css['header']}>
              <div>{props.title} SimpleModal</div>
              <IconButton onClick={handleClose} iconName="close" />
            </header>
            <main class={css['content']}>{props.children}</main>

            <footer class={css['actions']}>
              <Button class={css['action-btn']} onClick={handleClose}>
                Save
              </Button>
            </footer>
          </div>
        </div>
      </Portal>
    </Show>
  );
};
