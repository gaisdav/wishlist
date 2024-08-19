import { IProfileEditDTO, IProfileEntity, IProfileService, IProfileVM } from '../types.ts';
import { makeAutoObservable } from 'mobx';
import { throwError } from 'data/utils';
import { INotificationVM } from 'data/notification/vm/types.ts';

export class ProfileVM implements IProfileVM {
  private _loading: boolean = false;
  private _entity: IProfileEntity | null = null;

  get loading(): boolean {
    return this._loading;
  }

  get entity(): IProfileEntity | null {
    return this._entity;
  }

  get isAuthed(): boolean {
    return Boolean(this._entity);
  }

  constructor(
    private notification: INotificationVM,
    private service: IProfileService,
  ) {
    makeAutoObservable(this);
  }

  getProfile = async (): Promise<void> => {
    this._loading = true;
    try {
      this._entity = await this.service.getProfile();
    } catch (error) {
      this.notification.errorNotification(error);
      throwError(error);
    } finally {
      this._loading = false;
    }
  };

  editProfile = async (dto: IProfileEditDTO): Promise<void> => {
    this._loading = true;
    try {
      this._entity = await this.service.editProfile(dto);
      this.notification.successNotification('Profile updated successfully');
    } catch (error) {
      this.notification.errorNotification(error);
      throwError(error);
    } finally {
      this._loading = false;
    }
  };
}
