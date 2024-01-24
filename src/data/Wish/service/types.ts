import { ICreateWishDTO, IWishEntity } from '../entity';

export interface IWishService {
  getList(): Promise<IWishEntity[]>;
  createWish(dto: ICreateWishDTO): Promise<IWishEntity>;
}
