import { FC } from 'react';
import { IconButton as JoyIconButton } from '@mui/joy';
import { IIconButtonProps } from './types.ts';

export const IconButton: FC<IIconButtonProps> = ({ ...props }) => {
  return <JoyIconButton {...props}></JoyIconButton>;
};
