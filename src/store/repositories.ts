import { IRepositories } from './types.ts';
import { IWishRepository, WishRepository } from 'data/wish/repository';
import { IFetcher } from 'libs/api';
import { IProfileRepository } from 'data/profile/types.ts';
import { ProfileRepository } from 'data/profile/repository';

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

  get profile(): IProfileRepository {
    if (!this.repositories?.profile) {
      this.repositories = {
        profile: new ProfileRepository(this.fetcher),
      };
    }

    return this.repositories?.profile;
  }

  constructor(private readonly fetcher: IFetcher) {}
}
