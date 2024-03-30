import { HTMLAttributes } from 'react';

export interface IIcon extends HTMLAttributes<HTMLSpanElement> {
  iconName: string;
}
