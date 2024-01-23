import { IWishService } from './types.ts';
import { IWishEntity } from '../entity';
import { IWishRepository } from '../repository';

export class WishService implements IWishService {
  constructor(private repository: IWishRepository) {}

  getList(): Promise<IWishEntity[]> {
    return this.repository.getList();
  }
}
