import { FC } from 'react';
import { Typography as JoyTypography } from '@mui/joy';
import { ITypography } from './types.ts';

export const Typography: FC<ITypography> = (props) => {
  return <JoyTypography {...props} />;
};
