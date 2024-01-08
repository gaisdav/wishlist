import { HTMLAttributes } from 'react';

export interface IModalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  className?: string;
}

export type TModalComponent = IModalProps & HTMLAttributes<HTMLDivElement>;
