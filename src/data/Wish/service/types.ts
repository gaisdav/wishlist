import { IWishEntity } from '../entity';

export interface IWishService {
  getList(): Promise<IWishEntity[]>;
}
