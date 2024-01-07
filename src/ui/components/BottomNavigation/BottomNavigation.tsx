import cn from 'classnames';
import { splitProps } from 'solid-js';

import css from './styles.module.scss';
import { TBottomNavigationComponent } from './types.ts';
import { ERoute } from '../../routes/types.ts';
import { Card } from '../simple';
import { Button } from '../simple';
import { IconButton } from '../simple';

export const BottomNavigation: TBottomNavigationComponent = (_props) => {
  const [{ class: className = '', ...props }, others] = splitProps(_props, [
    'class',
    'onChangeTheme',
    'onOpenCreateWish',
  ]);

  const classes = cn(css['bottom-navigation'], className);

  return (
    <Card class={classes} {...others}>
      <IconButton iconName="browse" onClick={props.onChangeTheme} href={ERoute.HOME} />

      <Button class={css['hidden-button']}>-</Button>

      <Card class={css.add}>
        <IconButton class={css['add-button']} iconName="add" onClick={props.onOpenCreateWish} />
      </Card>

      <IconButton iconName="person" href={ERoute.PROFILE} />
    </Card>
  );
};
