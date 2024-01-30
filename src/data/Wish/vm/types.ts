import { ICreateWishDTO, IEditWishDTO, IWishEntity } from '../entity';

export interface IWishVM {
  loading: boolean;
  list: IWishEntity[];
  entity: IWishEntity | null;
  isLoading(id: string): boolean;

  getList(): Promise<void>;
  addWish(dto: ICreateWishDTO): Promise<void>;
  editWish(id: string, dto: IEditWishDTO): Promise<void>;
  getWish(id: string): Promise<void>;
  deleteWish(id: string): Promise<void>;
}
