import { IUserEntity } from 'data/user/types.ts';
import { getFullName } from './getFullName.ts';

export const getInitials = (user: IUserEntity | null): string => {
  const [firstName, lastName] = getFullName(user);

  return [firstName, lastName]
    .filter(Boolean)
    .map((name) => name.trim())
    .map((name) => name[0].toUpperCase())
    .join('');
};
