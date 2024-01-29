import { ICreateWishDTO, IWishEntity } from '../entity';

export interface IWishVM {
  loading: boolean;
  list: IWishEntity[];
  entity: IWishEntity | null;

  getList(): Promise<void>;
  addWish(dto: ICreateWishDTO): Promise<void>;
  getWish(id: string): Promise<void>;
}
