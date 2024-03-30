import { FC, PropsWithChildren } from 'react';
import { ISnackbar } from './types.ts';
import { Snackbar as MUISnackbar } from '@mui/joy';

export const Snackbar: FC<PropsWithChildren<ISnackbar>> = (props) => {
  return <MUISnackbar {...props} />;
};
