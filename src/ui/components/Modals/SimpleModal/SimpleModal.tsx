import { Portal } from 'solid-js/web';
import { TModalComponent } from '../types.ts';
import cn from 'classnames';
import css from './styles.module.scss';
import { Button } from '../../Button';
import { IconButton } from '../../IconButton';

export const SimpleModal: TModalComponent = ({ title, onClose, className, children, ...props }) => {
  const classes = cn(css['modal'], className);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Portal>
      <div class={classes} {...props}>
        <div class={css['layout']} onClick={handleClose} />

        <div class={css['content-wrapper']}>
          <header class={css['header']}>
            <div>{title} SimpleModal</div>
            <IconButton onClick={handleClose} iconName="close" />
          </header>
          <main class={css['content']}>{children}</main>

          <footer class={css['actions']}>
            <Button className={css['action-btn']} onClick={handleClose}>
              Save
            </Button>
          </footer>
        </div>
      </div>
    </Portal>
  );
};
