import { IComponent } from '../../common/types.ts';

export type TModalType = 'simple' | 'bottom';

export interface IModalProps {
  title?: string;
  onClose?: () => void;
  className?: string;
}

export type TModalComponent = IComponent<IModalProps, HTMLDivElement>;
