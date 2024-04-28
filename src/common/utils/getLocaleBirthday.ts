import { IUserEntity } from 'data/user/types.ts';

export const getLocaleBirthday = (user: IUserEntity | null) => {
  if (!user) {
    return '';
  }

  const { birthdate } = user;

  if (!birthdate) {
    return '';
  }

  return birthdate.toLocaleDateString();
};
