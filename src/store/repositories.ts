import { IRepositories } from './types.ts';
import { IWishRepository, WishRepository } from 'data/wish/repository';
import { IFetcher } from 'libs/api';

export class RepositoriesStore implements IRepositories {
  private repositories: IRepositories | null = null;

  get wish(): IWishRepository {
    if (!this.repositories?.wish) {
      this.repositories = {
        wish: new WishRepository(this.fetcher),
      };
    }

    return this.repositories.wish;
  }

  constructor(private readonly fetcher: IFetcher) {}
}
