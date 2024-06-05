import { FC, PropsWithChildren } from 'react';
import { ILink } from './types.ts';
import { Link as RouterLink } from 'react-router-dom';
import JoyLink from '@mui/joy/Link';
import cn from 'classnames';

export const Link: FC<PropsWithChildren<ILink>> = ({ to, children, className, component, ...props }) => (
  <JoyLink component={component || RouterLink} to={to} className={cn('link', className)} {...props}>
    {children}
  </JoyLink>
);
