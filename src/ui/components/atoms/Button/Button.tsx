import { FC, PropsWithChildren } from 'react';
import JoyButton from '@mui/joy/Button';
import { IButtonProps } from './types.ts';

export const Button: FC<PropsWithChildren<IButtonProps>> = (props) => {
  return <JoyButton {...props}>{props.children}</JoyButton>;
};
