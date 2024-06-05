import { forwardRef } from 'react';
import JoyIconButton from '@mui/joy/IconButton';
import { IIconButtonProps } from './types.ts';

export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  return <JoyIconButton {...props} ref={ref}></JoyIconButton>;
});

IconButton.displayName = 'IconButton';
