import { IServices, IVMs } from './types.ts';
import { IWishVM, WishVM } from 'data/wish/vm';
import { IProfileVM, ProfileVM } from 'data/profile/vm';

export class VMStore implements IVMs {
  private _wish: IWishVM | null = null;
  private _profile: IProfileVM | null = null;

  get wish(): IWishVM {
    if (!this._wish) {
      this._wish = new WishVM(this.services.wish);
    }

    return this._wish;
  }

  get profile(): IProfileVM {
    if (!this._profile) {
      this._profile = new ProfileVM();
    }

    return this._profile;
  }

  constructor(private services: IServices) {}
}
