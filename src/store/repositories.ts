import { IRepositories } from './types.ts';
import { IWishRepository, WishRepository } from '../data/Wish/repository';

export class RepositoriesStore implements IRepositories {
  private repositories: IRepositories | null = null;

  get wish(): IWishRepository {
    if (!this.repositories?.wish) {
      this.repositories = {
        wish: new WishRepository(),
      };
    }

    return this.repositories.wish;
  }

  constructor() {}
}
