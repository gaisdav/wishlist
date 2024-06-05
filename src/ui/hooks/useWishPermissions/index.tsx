import { useStore } from 'hooks/useStore.tsx';
import { IWishPermissions, IWishPermissionsParams } from './types.ts';

export const useWishPermissions = ({ wish }: IWishPermissionsParams): IWishPermissions => {
  const {
    profile: { entity },
  } = useStore();

  const isAuthor = Boolean(entity) && wish.author.id === entity?.id;

  return {
    canDelete: isAuthor,
    canEdit: isAuthor,
  };
};
