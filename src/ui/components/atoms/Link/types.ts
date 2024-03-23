import { LinkProps } from '@mui/joy';
import { ERoute } from 'routes/types.ts';

export interface ILink extends LinkProps {
  to?: ERoute | string;
}
