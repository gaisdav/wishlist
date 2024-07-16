import { IWishEntity } from 'data/wish/types.ts';

export type IWishPermissions = {
  canDelete: boolean;
  canEdit: boolean;
  canBookmark: boolean;
};

export type IWishPermissionsParams = {
  wish: IWishEntity;
};
