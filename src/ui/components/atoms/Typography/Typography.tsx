import { FC } from 'react';
import JoyTypography from '@mui/joy/Typography';
import { ITypography } from './types.ts';

export const Typography: FC<ITypography> = (props) => {
  return <JoyTypography {...props} />;
};
