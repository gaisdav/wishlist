import { TBottomNavigationComponent } from './types.ts';
import { Card } from '../Card';
import cn from 'classnames';
import css from './styles.module.scss';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

export const BottomNavigation: TBottomNavigationComponent = ({
  onChangeTheme,
  onOpenCreateWish,
  className,
  ...props
}) => {
  const classes = cn(css['bottom-navigation'], className);

  return (
    <Card className={classes} {...props}>
      <IconButton iconName="browse" onClick={onChangeTheme} />

      <Button className={css['hidden-button']}>-</Button>

      <Card className={css.add}>
        <IconButton className={css['add-button']} iconName="add" onClick={onOpenCreateWish} />
      </Card>

      <IconButton iconName="person" />
    </Card>
  );
};
