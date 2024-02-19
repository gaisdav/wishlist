import { FC } from 'react';
import { IAvatar } from './types.ts';
import { Avatar as JoyAvatar } from '@mui/joy';

export const Avatar: FC<IAvatar> = (props) => {
  return <JoyAvatar {...props} />;
};
