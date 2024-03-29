import { FC } from 'react';
import { IUserInfo } from './types.ts';
import { Avatar } from 'components/atoms/Avatar';
import { Icon, IconButton, Link, Typography } from 'components/atoms';
import css from './styles.module.scss';
import { ERoute } from 'routes/types.ts';

export const UserInfo: FC<IUserInfo> = ({ user, wishes, loading }) => {
  if (!user || loading) return 'Loading...';

  const { firstName, avatarSrc, lastName } = user;
  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const birthday = user.birthdate?.toLocaleDateString();

  return (
    <div className={css.userInfo}>
      <Avatar alt={fullName} src={avatarSrc}>
        {initials}
      </Avatar>

      <div className={css.info}>
        <Typography>{fullName}</Typography>
        {birthday && <Typography>Birthday: {birthday}</Typography>}
        <Typography>{wishes} wishes</Typography>
        <Link to={ERoute.PROFILE_EDIT}>
          <IconButton disabled={loading}>
            <Icon iconName="edit" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
