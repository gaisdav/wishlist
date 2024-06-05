import { IUserVM, IUserEntity, IUserService } from '../types.ts';
import { makeAutoObservable } from 'mobx';
import { throwError } from 'data/utils';

export class UserVM implements IUserVM {
  private _loading: boolean = false;
  private _usersLoading: boolean = false;
  private _user: IUserEntity | null = null;
  private _users: IUserEntity[] = [];

  get loading(): boolean {
    return this._loading;
  }

  get usersLoading(): boolean {
    return this._usersLoading;
  }

  get entity(): IUserEntity | null {
    return this._user;
  }

  get users(): IUserEntity[] {
    return this._users;
  }

  constructor(private service: IUserService) {
    makeAutoObservable(this);
  }

  getUser = async (username: string): Promise<void> => {
    try {
      this._loading = true;
      this._user = await this.service.getUser(username);
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };

  getUsers = async (search: string): Promise<void> => {
    try {
      this._loading = true;
      this._users = await this.service.getUsers(search);
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };
}
