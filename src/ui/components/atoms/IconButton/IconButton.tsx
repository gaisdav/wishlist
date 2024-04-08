import { forwardRef } from 'react';
import { IconButton as JoyIconButton } from '@mui/joy';
import { IIconButtonProps } from './types.ts';

export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  return <JoyIconButton {...props} ref={ref}></JoyIconButton>;
});

IconButton.displayName = 'IconButton';
