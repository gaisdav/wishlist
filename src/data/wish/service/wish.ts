import { IWishService } from './types.ts';
import { ICreateWishDTO, IEditWishDTO, IWishEntity, Wish } from '../entity';
import { IWishRepository } from '../repository';

export class WishService implements IWishService {
  constructor(private repository: IWishRepository) {}

  async getList(): Promise<IWishEntity[]> {
    const list = await this.repository.getList();

    return list.map((item) => new Wish(item));
  }

  async createWish(dto: ICreateWishDTO): Promise<IWishEntity> {
    const wish = await this.repository.createWish(dto);

    return new Wish(wish);
  }

  async editWish(id: string, dto: IEditWishDTO): Promise<IWishEntity> {
    const wish = await this.repository.editWish(id, dto);

    return new Wish(wish);
  }

  async getWish(id: string): Promise<IWishEntity> {
    const wish = await this.repository.getWish(id);

    return new Wish(wish);
  }

  async deleteWish(id: string): Promise<void> {
    await this.repository.deleteWish(id);
  }
}
