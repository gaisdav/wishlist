import { ERoute } from '../../../routes/types.ts';
import { LinkProps } from '@mui/joy';

export interface ILink extends LinkProps {
  to: ERoute;
}
