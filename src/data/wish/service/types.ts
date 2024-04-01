import { ICreateWishDTO, IEditWishDTO, IWishEntity } from '../entity';

export interface IWishService {
  getList(username: string): Promise<IWishEntity[]>;
  getProfileList(): Promise<IWishEntity[]>;
  createWish(dto: ICreateWishDTO): Promise<IWishEntity>;
  editWish(id: string, dto: IEditWishDTO): Promise<IWishEntity>;
  getWish(id: string): Promise<IWishEntity>;
  deleteWish(id: string): Promise<void>;
}
