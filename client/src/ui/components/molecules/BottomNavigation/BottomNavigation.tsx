import { FC } from 'react';
import { IBottomNavigation } from './types.ts';
import { Icon, IconButton, Link } from 'components/atoms';
import { ERoute } from 'routes/types.ts';

export const BottomNavigation: FC<IBottomNavigation> = ({ className, onSwitchTheme, ...props }) => (
  <nav className={className} {...props}>
    <Link to={ERoute.HOME}>
      <Icon iconName="grid_view" />
    </Link>

    <IconButton onClick={onSwitchTheme}>
      <Icon iconName="account_circle" />
    </IconButton>
  </nav>
);
