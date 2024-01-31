import { ICreateWishDTO, IEditWishDTO, IWishEntity } from 'data/wish/entity';

export interface IWishModal {
  open?: boolean;
  loading?: boolean;
  onClose: () => void;
  mode: 'add' | 'edit';
  onSubmit: (wish: ICreateWishDTO | IEditWishDTO) => void;
}

export interface IEditWishModal extends Omit<IWishModal, 'title' | 'onSubmit' | 'mode'> {
  wish?: IWishEntity | null;
  onSubmit: (wish: IEditWishDTO) => void;
}

export interface IAddWishModal extends Omit<IWishModal, 'wish' | 'title' | 'onSubmit' | 'mode'> {
  onSubmit: (wish: ICreateWishDTO) => void;
}
