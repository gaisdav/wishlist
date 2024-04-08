import { FC } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
// TODO move to atoms
import { Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem } from '@mui/joy';
import { Card, Icon, IconButton, Img, LinearProgress, Typography } from 'components/atoms';
import { dynamicRoute } from 'common/utils.ts';
import { ERoute } from 'routes/types.ts';

export const WishCard: FC<IWishCard> = ({
  wish: { id, title, description, imageSrc, author },
  loading,
  onEdit,
  onDelete,
}) => {
  const canShare = 'canShare' in navigator;
  const route = dynamicRoute(ERoute.USER_WISH, { wishId: id, userId: author?.id });
  const shareUrl = `${window.location.origin}/${route}`;

  const handleShare = async () => {
    if (canShare) {
      await navigator.share({
        title: 'My wish!',
        text: `Hey! Here's my wish`,
        url: shareUrl,
      });
    } else {
      await navigator.clipboard.writeText(shareUrl);
    }
  };

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

  return (
    <Card className={cn(css.wishCard, { [css.loading]: loading })}>
      {loading ? <LinearProgress className={css.linearProgress} size="sm" /> : null}
      <Dropdown>
        <MenuButton slots={{ root: IconButton }} className={css.action}>
          <Icon iconName="more_vert" />
        </MenuButton>
        <Menu>
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
          <MenuItem onClick={handleShare}>
            <ListItemDecorator>
              <Icon iconName="reply" />
            </ListItemDecorator>
            Share wish
          </MenuItem>
        </Menu>
      </Dropdown>

      {imageSrc ? (
        <Card className={css.wishPic}>
          <Img className={css.backgroundImg} alt="gift" src={imageSrc} />
        </Card>
      ) : null}

      <Typography>{title}</Typography>

      <Typography>{description}</Typography>
    </Card>
  );
};
