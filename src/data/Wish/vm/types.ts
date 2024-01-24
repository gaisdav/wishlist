import { ICreateWishDTO, IWishEntity } from '../entity';

export interface IWishVM {
  loading: boolean;
  list: IWishEntity[];

  getList(): Promise<void>;
  createWish(dto: ICreateWishDTO): Promise<void>;
}
