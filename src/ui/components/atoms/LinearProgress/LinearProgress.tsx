import { FC } from 'react';
import { LinearProgress as JoyLinearProgress } from '@mui/joy';
import { ILinearProgress } from './types.ts';

export const LinearProgress: FC<ILinearProgress> = (props) => {
  return <JoyLinearProgress {...props} />;
};
