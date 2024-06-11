import { FC, PropsWithChildren } from 'react';
import { TModalComponent } from './types.ts';
import { DialogContent, DialogTitle, Modal as JoyModal, ModalClose, ModalDialog, Theme } from '@mui/joy';

export const Modal: FC<PropsWithChildren<TModalComponent>> = ({ open, title, onClose, children }) => {
  return (
    <JoyModal open={open} onClose={onClose}>
      <ModalDialog
        sx={(theme: Theme) => ({
          [theme.breakpoints.down('sm')]: {
            top: 'unset',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'none',
            maxWidth: 'unset',
          },
        })}
      >
        <ModalClose />
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </ModalDialog>
    </JoyModal>
  );
};
