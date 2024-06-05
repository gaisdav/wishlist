import { IWishEntity } from 'data/wish/types.ts';

export interface IWishActions {
  loading?: boolean;
  wish: IWishEntity;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}
