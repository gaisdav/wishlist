import { IRepositories, IServices } from './types.ts';
import { IWishService, WishService } from 'data/wish/service';
import { IProfileService } from 'data/profile/types.ts';
import { ProfileService } from 'data/profile/service';

export class ServicesStore implements IServices {
  private _wish?: IWishService;
  private _profile?: IProfileService;

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

  constructor(private repositories: IRepositories) {}
}
