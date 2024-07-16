import { FC, MouseEventHandler } from 'react';
import { IWishActions } from './types.ts';
import { useShareData } from 'hooks/useShareData';
import { dynamicRoute } from 'common/utils/utils.ts';
import { ERoute } from 'routes/types.ts';
import { useWishPermissions } from 'hooks/useWishPermissions';
import css from './styles.module.scss';
import cn from 'classnames';
import { Icon, IconButton } from 'components/atoms';

export const WishCardActions: FC<IWishActions> = ({ onEdit, onDelete, wish, className }) => {
  const cls = cn(css.wishCardActions, className);
  const url =
    window.location.origin +
    dynamicRoute(ERoute.USER_WISH, {
      wishId: wish.id,
      username: wish.author.username,
    });

  const { canDelete, canEdit, canBookmark } = useWishPermissions({ wish });

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
    <div className={cls} onClick={handlePreventEvent}>
      {canEdit && (
        <IconButton size="sm" onClick={handleEdit}>
          <Icon size="sm" iconName="edit" />
        </IconButton>
      )}

      {canDelete && (
        <IconButton size="sm" onClick={handleDelete}>
          <Icon size="sm" iconName="delete" />
        </IconButton>
      )}

      <IconButton size="sm" onClick={share}>
        <Icon size="sm" iconName={shareIcon} />
      </IconButton>

      {canBookmark && (
        <IconButton size="sm">
          <Icon size="sm" iconName="bookmark_add" />
        </IconButton>
      )}
    </div>
  );
};
