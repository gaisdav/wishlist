import { FC } from 'react';
import { IIcon } from './types.ts';

export const Icon: FC<IIcon> = ({ iconName }) => {
  return <span className="material-icons material-icons-round">{iconName}</span>;
};
