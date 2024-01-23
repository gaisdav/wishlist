import { FC } from 'react';
import { IBottomNavigation } from './types.ts';
import { Icon, IconButton, Link } from '../../atoms';
import { ERoute } from '../../../../routes/types.ts';

export const BottomNavigation: FC<IBottomNavigation> = ({ className, onSwitchTheme, ...props }) => (
  <nav className={className} {...props}>
    <Link to={ERoute.HOME}>
      <Icon iconName="grid_view" />
    </Link>
    {/*<IconButton onClick={onSwitchTheme}></IconButton>*/}

    <IconButton onClick={onSwitchTheme}>
      <Icon iconName="add" />
    </IconButton>

    <Link to={ERoute.PROFILE}>
      <Icon iconName="account_circle" />
    </Link>
  </nav>
);
