import { ICreateWishDTO, IEditWishDTO, IWishEntity } from '../entity';

export interface IWishService {
  getList(): Promise<IWishEntity[]>;
  createWish(dto: ICreateWishDTO): Promise<IWishEntity>;
  editWish(id: string, dto: IEditWishDTO): Promise<IWishEntity>;
  getWish(id: string): Promise<IWishEntity>;
  deleteWish(id: string): Promise<void>;
}
