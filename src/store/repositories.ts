import { IRepositories } from './types.ts';
import { IWishRepository, WishRepository } from 'data/wish/repository';
import { IFetcher } from 'libs/api';
import { IProfileRepository } from 'data/profile/types.ts';
import { ProfileRepository } from 'data/profile/repository';
import { IUserRepository } from 'data/user/types.ts';
import { UserRepository } from 'data/user/repository';

export class RepositoriesStore implements IRepositories {
  private _wish?: IWishRepository;
  private _profile?: IProfileRepository;
  private _user?: IUserRepository;

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

  get user(): IUserRepository {
    if (!this._user) {
      this._user = new UserRepository(this.fetcher);
    }

    return this._user;
  }

  constructor(private readonly fetcher: IFetcher) {}
}
