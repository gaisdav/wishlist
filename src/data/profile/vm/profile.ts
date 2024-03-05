import { IProfileEditDTO, IProfileEntity, IProfileService, IProfileVM } from '../types.ts';
import { makeAutoObservable } from 'mobx';
import { throwError } from 'data/utils';

export class ProfileVM implements IProfileVM {
  private _loading: boolean = false;
  private _entity: IProfileEntity | null = null;

  get loading(): boolean {
    return this._loading;
  }

  get entity(): IProfileEntity | null {
    return this._entity;
  }

  constructor(private service: IProfileService) {
    makeAutoObservable(this);
  }

  getProfile = async (): Promise<void> => {
    this._loading = true;
    try {
      this._entity = await this.service.getProfile();
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };

  editProfile = async (dto: IProfileEditDTO): Promise<void> => {
    this._loading = true;
    try {
      this._entity = await this.service.editProfile(dto);
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };
}
