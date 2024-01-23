import { IWishVM } from './types.ts';
import { IWishEntity } from '../entity';
import { IWishService } from '../service';
import { makeAutoObservable } from 'mobx';

export class WishVM implements IWishVM {
  private _loading: boolean = false;
  private _list: IWishEntity[] = [];

  get loading(): boolean {
    return this._loading;
  }

  get list(): IWishEntity[] {
    return this._list;
  }

  constructor(private service: IWishService) {
    makeAutoObservable(this);
  }

  async getList(): Promise<void> {
    this._loading = true;
    this._list = await this.service.getList();
    this._loading = false;
  }
}
