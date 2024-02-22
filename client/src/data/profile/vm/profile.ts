import { IProfileVM } from './types.ts';
import { makeAutoObservable } from 'mobx';
import { IProfileEntity, Profile } from 'data/profile/entity';

export class ProfileVM implements IProfileVM {
  private _loading: boolean = false;
  private _entity: IProfileEntity | null = new Profile();

  get loading(): boolean {
    return this._loading;
  }

  get entity(): IProfileEntity | null {
    return this._entity;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
