import { FC, PropsWithChildren } from 'react';
import { ISnackbar } from './types.ts';
import MUISnackbar from '@mui/joy/Snackbar';

export const Snackbar: FC<PropsWithChildren<ISnackbar>> = (props) => {
  return <MUISnackbar {...props} />;
};
