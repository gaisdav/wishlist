import { IWishEntity } from 'data/wish/entity';

export interface IWishCard {
  loading?: boolean;
  wish: IWishEntity;

  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}
