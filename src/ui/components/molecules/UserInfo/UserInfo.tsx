import { FC } from 'react';
import { IUserInfo } from './types.ts';
import { Avatar } from 'components/atoms/Avatar';
import { Typography } from 'components/atoms';

export const UserInfo: FC<IUserInfo> = ({ user }) => {
  if (!user) return 'loading...';

  const { firstName, avatarSrc, lastName } = user;
  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const birthday = user.birthdate.toLocaleDateString();

  return (
    <div>
      <Avatar alt={fullName} src={avatarSrc} size="lg">
        {initials}
      </Avatar>

      <Typography>{fullName}</Typography>
      <Typography>{birthday}</Typography>
      <Typography>N wishes</Typography>
      <Typography>N followers</Typography>
    </div>
  );
};
