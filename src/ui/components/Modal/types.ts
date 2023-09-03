import { Accessor } from 'solid-js';

import { IComponent } from '../../common';

export interface IModalProps {
  open: Accessor<boolean>;
  title?: string;
  onClose?: () => void;
  className?: string;
}

export type TModalComponent = IComponent<IModalProps, HTMLDivElement>;
