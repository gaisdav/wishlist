import { FC } from 'react';
import { IIconButtonProps } from './types.ts';
import { Button } from '../Button';

export const IconButton: FC<IIconButtonProps> = ({ iconName, ...props }) => {
  return (
    <Button {...props}>
      <span className="material-symbols-rounded">{iconName}</span>
    </Button>
  );
};
