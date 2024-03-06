import { IRepositories } from './types.ts';
import { IWishRepository, WishRepository } from 'data/wish/repository';
import { IFetcher } from 'libs/api';
import { IProfileRepository } from 'data/profile/types.ts';
import { ProfileRepository } from 'data/profile/repository';

export class RepositoriesStore implements IRepositories {
  private _wish?: IWishRepository;
  private _profile?: IProfileRepository;

  get wish(): IWishRepository {
    if (!this?._wish) {
      this._wish = new WishRepository(this.fetcher);
    }

    return this._wish;
  }

  get profile(): IProfileRepository {
    if (!this._profile) {
      this._profile = new ProfileRepository(this.fetcher);
    }

    return this._profile;
  }

  constructor(private readonly fetcher: IFetcher) {}
}
