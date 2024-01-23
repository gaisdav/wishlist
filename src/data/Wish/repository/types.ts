import { IWishEntity } from '../entity';

export interface IWishRepository {
  getList(): Promise<IWishEntity[]>;
}
