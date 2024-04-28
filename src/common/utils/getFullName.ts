import { IUserEntity } from 'data/user/types.ts';

export const getFullName = (user: IUserEntity | null): string => {
  if (!user) {
    return '';
  }

  const { firstName, lastName } = user;

  return [firstName, lastName]
    .filter(Boolean)
    .map((name) => name.trim())
    .join(' ');
};
