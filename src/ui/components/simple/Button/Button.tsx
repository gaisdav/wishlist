import { FC, PropsWithChildren } from 'react';
import { Button as JoyButton } from '@mui/joy';
import { IButtonProps } from './types.ts';

export const Button: FC<PropsWithChildren<IButtonProps>> = (props) => {
  return <JoyButton {...props}>{props.children}</JoyButton>;
};
