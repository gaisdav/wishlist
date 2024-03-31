import { IRepositories, IServices } from './types.ts';
import { IWishService, WishService } from 'data/wish/service';
import { IProfileService } from 'data/profile/types.ts';
import { ProfileService } from 'data/profile/service';
import { IUserService } from 'data/user/types.ts';
import { UserService } from 'data/user/service';

export class ServicesStore implements IServices {
  private _wish?: IWishService;
  private _profile?: IProfileService;
  private _user?: IUserService;

  get wish(): IWishService {
    if (!this._wish) {
      this._wish = new WishService(this.repositories.wish);
    }

    return this._wish;
  }

  get profile(): IProfileService {
    if (!this._profile) {
      this._profile = new ProfileService(this.repositories.profile);
    }

    return this._profile;
  }

  get user(): IUserService {
    if (!this._user) {
      this._user = new UserService(this.repositories.user);
    }

    return this._user;
  }

  constructor(private repositories: IRepositories) {}
}
