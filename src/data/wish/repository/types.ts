import { ICreateWishDTO, IEditWishDTO, IWishResponse } from '../entity';

export interface IWishRepository {
  getList(username: string): Promise<IWishResponse[]>;
  getProfileList(): Promise<IWishResponse[]>;
  createWish(dto: ICreateWishDTO): Promise<IWishResponse>;
  editWish(id: string, dto: IEditWishDTO): Promise<IWishResponse>;
  getWish(id: string): Promise<IWishResponse>;
  deleteWish(id: string): Promise<void>;
}
