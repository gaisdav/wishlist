import { FC, MouseEventHandler } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
// TODO move to atoms
import { Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem } from '@mui/joy';
import { Card, Icon, IconButton, Img, LinearProgress, Link, Typography } from 'components/atoms';
import { dynamicRoute } from 'common/utils/utils.ts';
import { ERoute } from 'routes/types.ts';
import { useShareData } from 'hooks/useShareData';

export const WishCard: FC<IWishCard> = ({
  wish: { id, title, description, imageSrc, author },
  loading,
  onEdit,
  onDelete,
}) => {
  const route = dynamicRoute(ERoute.USER_WISH, { wishId: id, username: author?.username });
  const shareUrl = `${window.location.origin}${route}`;
  const { share, shareIcon } = useShareData({
    title: 'My wish!',
    text: `Hey! Here's my wish`,
    url: shareUrl,
  });

  const handleEdit = () => {
    if (onEdit) {
      onEdit(id);
    }
  };
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handlePreventEvent: MouseEventHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Link to={route} underline="none">
      <Card className={cn(css.wishCard, { [css.loading]: loading })}>
        {loading ? <LinearProgress className={css.linearProgress} size="sm" /> : null}

        {imageSrc ? <Img className={css.backgroundImg} alt="gift" src={imageSrc} /> : null}

        <div className={css.titleWrapper}>
          <Typography>{title} </Typography>{' '}
          <Dropdown>
            <MenuButton size="sm" slots={{ root: IconButton }} className={css.action} onClick={handlePreventEvent}>
              <Icon iconName="more_vert" />
            </MenuButton>
            <Menu size="sm" onClick={handlePreventEvent}>
              <MenuItem onClick={handleEdit}>
                <ListItemDecorator>
                  <Icon iconName="edit" />
                </ListItemDecorator>
                Edit wish
              </MenuItem>
              <MenuItem onClick={handleDelete}>
                <ListItemDecorator>
                  <Icon iconName="delete" />
                </ListItemDecorator>
                Delete wish
              </MenuItem>
              <MenuItem onClick={share}>
                <ListItemDecorator>
                  <Icon iconName={shareIcon} />
                </ListItemDecorator>
                Share wish
              </MenuItem>
            </Menu>
          </Dropdown>
        </div>

        <Typography>{description}</Typography>
      </Card>
    </Link>
  );
};
