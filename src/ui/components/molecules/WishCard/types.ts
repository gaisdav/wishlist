import { IWishEntity } from '../../../../data/Wish/entity';

export interface IWishCard {
  loading?: boolean;
  wish: IWishEntity;

  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}
