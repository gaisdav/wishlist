import { FC, PropsWithChildren } from 'react';
import { ILink } from './types.ts';
import { Link as RouterLink } from 'react-router-dom';
import { Link as JoyLink } from '@mui/joy';

export const Link: FC<PropsWithChildren<ILink>> = ({ to, children, ...props }) => (
  <JoyLink {...props} component={RouterLink} to={to}>
    {children}
  </JoyLink>
);
