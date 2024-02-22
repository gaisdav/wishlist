import { ICreateWishDTO, IEditWishDTO, IWishResponse } from '../entity';

export interface IWishRepository {
  getList(): Promise<IWishResponse[]>;
  createWish(dto: ICreateWishDTO): Promise<IWishResponse>;
  editWish(id: string, dto: IEditWishDTO): Promise<IWishResponse>;
  getWish(id: string): Promise<IWishResponse>;
  deleteWish(id: string): Promise<IWishResponse>;
}
