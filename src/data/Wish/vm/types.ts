import { IWishEntity } from '../entity';

export interface IWishVM {
  loading: boolean;
  list: IWishEntity[];
  getList(): Promise<void>;
}
