import { FC, PropsWithChildren, useEffect, useState } from 'react';
import cn from 'classnames';

import css from './styles.module.scss';
import { TModalComponent } from './types.ts';
import { breakpoints } from '../../../common';
import { Button, IconButton } from '../../atoms';

export const Modal: FC<PropsWithChildren<TModalComponent>> = ({
  className,
  open,
  title,
  onClose,
  children,
  ...props
}) => {
  let timerHandle: number;
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  const contentClasses = cn(
    css['content-wrapper'],
    window.innerWidth > breakpoints.md ? [css['desktop']] : css['mobile'],
  );

  useEffect(() => {
    if (open) {
      setOpened(true);
      setMounted(true);
    } else {
      setMounted(false);
      timerHandle = window.setTimeout(() => setOpened(false), 300);
    }

    return () => {
      clearTimeout(timerHandle);
    };
  }, [open]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={cn(
          css['modal'],
          {
            [css['mounted']]: mounted && opened,
            [css['unmounted']]: !mounted && opened,
          },
          className,
        )}
        {...props}
      >
        <div className={css['layout']} onClick={handleClose} />

        <div className={contentClasses}>
          <header className={css['header']}>
            <div>{title}</div>
            <IconButton onClick={handleClose} iconName="close" />
          </header>
          <main className={css['content']}>{children}</main>

          <footer className={css['actions']}>
            <Button className={css['action-btn']} onClick={handleClose}>
              Save
            </Button>
          </footer>
        </div>
      </div>
    </>
  );
};
