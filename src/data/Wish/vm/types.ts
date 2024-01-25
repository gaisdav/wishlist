import { ICreateWishDTO, IWishEntity } from '../entity';

export interface IWishVM {
  loading: boolean;
  list: IWishEntity[];

  getList(): Promise<void>;
  addWish(dto: ICreateWishDTO): Promise<void>;
}
