import { ICreateWishDTO } from '../../../../data/Wish/entity';

export interface IAddWishModal {
  open?: boolean;
  loading?: boolean;
  mode?: 'add' | 'edit';
  onClose?: () => void;
  onSubmit: (dto: ICreateWishDTO) => Promise<void>;
}
