import { ModalProps } from '@mui/joy';

export interface IModalProps extends ModalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  className?: string;
}

export type TModalComponent = IModalProps;
