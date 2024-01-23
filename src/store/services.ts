import { IRepositories, IServices } from './types.ts';
import { IWishService, WishService } from '../data/Wish/service';

export class ServicesStore implements IServices {
  private services: IServices | null = null;

  get wish(): IWishService {
    if (!this.services?.wish) {
      this.services = {
        wish: new WishService(this.repositories.wish),
      };
    }

    return this.services.wish;
  }

  constructor(private repositories: IRepositories) {}
}
