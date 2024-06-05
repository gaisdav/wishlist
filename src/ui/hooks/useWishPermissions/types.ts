import { IWishEntity } from 'data/wish/types.ts';

export type IWishPermissions = {
  canDelete: boolean;
  canEdit: boolean;
};

export type IWishPermissionsParams = {
  wish: IWishEntity;
};
