import { FC } from 'react';
import { IUserInfo } from './types.ts';
import { Avatar } from 'components/atoms/Avatar';
import { Icon, IconButton, Link, Typography } from 'components/atoms';
import css from './styles.module.scss';
import { ERoute } from 'routes/types.ts';
import { dynamicRoute } from 'common/utils.ts';

export const UserInfo: FC<IUserInfo> = ({ user, isProfile, wishes, loading }) => {
  if (!user || loading) return 'Loading...';

  const { firstName, avatarSrc, lastName } = user;
  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const birthday = user.birthdate?.toLocaleDateString();

  const canShare = 'canShare' in navigator;
  const route = dynamicRoute(ERoute.USER, { username: user.username });
  const shareUrl = window.location.origin + route;

  const handleShare = async () => {
    if (canShare) {
      await navigator.share({
        title: `${firstName}'s wishlist`,
        text: `Hey! here's ${firstName}'s wishlist`,
        url: shareUrl,
      });
    } else {
      await navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div className={css.userInfo}>
      <Avatar alt={fullName} src={avatarSrc}>
        {initials}
      </Avatar>

      <div className={css.info}>
        <Typography>{fullName}</Typography>
        {birthday && <Typography>Birthday: {birthday}</Typography>}
        <Typography>{wishes} wishes</Typography>
        {isProfile && (
          <Link to={ERoute.PROFILE_EDIT}>
            <IconButton disabled={loading}>
              <Icon iconName="edit" />
            </IconButton>
          </Link>
        )}
        <IconButton disabled={loading} onClick={handleShare}>
          <Icon className={css.shareIcon} iconName={canShare ? 'reply' : 'link'} />
        </IconButton>
      </div>
    </div>
  );
};
