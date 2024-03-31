import { IUserVM, IUserEntity, IUserService } from '../types.ts';
import { makeAutoObservable } from 'mobx';
import { throwError } from 'data/utils';

export class UserVM implements IUserVM {
  private _loading: boolean = false;
  private _entity: IUserEntity | null = null;

  get loading(): boolean {
    return this._loading;
  }

  get entity(): IUserEntity | null {
    return this._entity;
  }

  constructor(private service: IUserService) {
    makeAutoObservable(this);
  }

  getUser = async (username: string): Promise<void> => {
    try {
      this._loading = true;
      this._entity = await this.service.getUser(username);
    } catch (error) {
      throwError(error);
      this._loading = false;
    } finally {
      this._loading = false;
    }
  };
}
