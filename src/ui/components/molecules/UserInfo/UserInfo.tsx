import { FC } from 'react';
import { IUserInfo } from './types.ts';
import { Avatar } from 'components/atoms/Avatar';
import { Icon, IconButton, Link, Typography } from 'components/atoms';
import css from './styles.module.scss';
import { ERoute } from 'routes/types.ts';
import { dynamicRoute } from 'common/utils/utils.ts';
import { useShareData } from 'hooks/useShareData';
import { getFullName } from 'common/utils/getFullName.ts';
import { getInitials } from 'common/utils/getInitials.ts';
import { getLocaleBirthday } from 'common/utils/getLocaleBirthday.ts';

export const UserInfo: FC<IUserInfo> = ({ user, isProfile, wishes, loading }) => {
  const route = dynamicRoute(ERoute.USER, { username: user?.username });
  const shareUrl = window.location.origin + route;

  const { firstName, avatarSrc } = user || {};
  const fullName = getFullName(user);
  const initials = getInitials(user);
  const birthday = getLocaleBirthday(user);

  const {
    share,
    shareIcon,
    loading: shareLoading,
  } = useShareData({
    title: `${firstName}'s wishlist`,
    text: `Hey! Here's ${firstName}'s wishlist`,
    url: shareUrl,
    files: avatarSrc,
  });

  if (loading) return 'Loading...';

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
          <Link to={ERoute.PROFILE_EDIT} underline="none">
            <IconButton disabled={loading}>
              <Icon iconName="edit" />
            </IconButton>
          </Link>
        )}
        <IconButton disabled={loading} onClick={share}>
          {shareLoading && 'Loading...'}
          <Icon className={css.shareIcon} iconName={shareIcon} />
        </IconButton>
      </div>
    </div>
  );
};
