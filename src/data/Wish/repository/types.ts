import { ICreateWishDTO, IWishResponse } from '../entity';

export interface IWishRepository {
  getList(): Promise<IWishResponse[]>;
  createWish(dto: ICreateWishDTO): Promise<IWishResponse>;
  getWish(id: string): Promise<IWishResponse>;
}
