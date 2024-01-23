import { FC, PropsWithChildren } from 'react';
import { TModalComponent } from './types.ts';
import { DialogContent, DialogTitle, Modal as JoyModal, ModalClose, ModalDialog } from '@mui/joy';

export const Modal: FC<PropsWithChildren<TModalComponent>> = ({ open, title, onClose, children }) => {
  return (
    <JoyModal open={open} onClose={onClose}>
      <ModalDialog>
        <ModalClose />
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </ModalDialog>
    </JoyModal>
  );
};
