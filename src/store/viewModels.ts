import { IServices, IVMs } from './types.ts';
import { IWishVM, WishVM } from 'data/wish/vm';
import { IProfileVM, ProfileVM } from 'data/profile/vm';
import { INotificationVM } from 'data/notification/vm/types.ts';
import { NotificationsVM } from 'data/notification/vm/notification.ts';

export class VMStore implements IVMs {
  private _wish: IWishVM | null = null;
  private _profile: IProfileVM | null = null;
  private _notification: INotificationVM | null = null;

  get wish(): IWishVM {
    if (!this._wish) {
      this._wish = new WishVM(this.services.wish);
    }

    return this._wish;
  }

  get notification(): INotificationVM {
    if (!this._notification) {
      this._notification = new NotificationsVM();
    }

    return this._notification;
  }

  get profile(): IProfileVM {
    if (!this._profile) {
      this._profile = new ProfileVM(this.notification, this.services.profile);
    }

    return this._profile;
  }

  constructor(private services: IServices) {}
}
