import { FC, MouseEventHandler } from 'react';
import css from './styles.module.scss';
import { IWishActions } from './types.ts';
import { Icon, IconButton } from 'components/atoms';
import { Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem } from '@mui/joy';
import { useShareData } from 'hooks/useShareData';
import { dynamicRoute } from 'common/utils/utils.ts';
import { ERoute } from 'routes/types.ts';
import { useWishPermissions } from 'hooks/useWishPermissions';

export const WishActions: FC<IWishActions> = ({ onEdit, onDelete, wish }) => {
  const url =
    window.location.origin +
    dynamicRoute(ERoute.USER_WISH, {
      wishId: wish.id,
      username: wish.author.username,
    });

  const { canDelete, canEdit } = useWishPermissions({ wish });

  const { share, shareIcon } = useShareData({
    title: 'My wish!',
    text: `Hey! Here's my wish`,
    url,
  });

  const handleEdit = () => {
    if (onEdit) {
      onEdit(wish.id);
    }
  };
  const handleDelete = () => {
    if (onDelete) {
      onDelete(wish.id);
    }
  };

  const handlePreventEvent: MouseEventHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Dropdown>
      <MenuButton size="sm" slots={{ root: IconButton }} className={css.action} onClick={handlePreventEvent}>
        <Icon iconName="more_vert" />
      </MenuButton>
      <Menu size="sm" onClick={handlePreventEvent}>
        {canEdit && (
          <MenuItem onClick={handleEdit}>
            <ListItemDecorator>
              <Icon iconName="edit" />
            </ListItemDecorator>
            Edit wish
          </MenuItem>
        )}

        {canDelete && (
          <MenuItem onClick={handleDelete}>
            <ListItemDecorator>
              <Icon iconName="delete" />
            </ListItemDecorator>
            Delete wish
          </MenuItem>
        )}

        <MenuItem onClick={share}>
          <ListItemDecorator>
            <Icon iconName={shareIcon} />
          </ListItemDecorator>
          Share wish
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
