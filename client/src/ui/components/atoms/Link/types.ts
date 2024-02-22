import { LinkProps } from '@mui/joy';
import { ERoute } from '../../../../routes';

export interface ILink extends LinkProps {
  to: ERoute;
}
