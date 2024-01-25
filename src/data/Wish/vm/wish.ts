import { IWishVM } from './types.ts';
import { ICreateWishDTO, IWishEntity } from '../entity';
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

  getList = async (): Promise<void> => {
    this._loading = true;
    this._list = await this.service.getList();
    this._loading = false;
  };

  addWish = async (dto: ICreateWishDTO): Promise<void> => {
    this._loading = true;
    const wish = await this.service.createWish(dto);
    this._list.unshift(wish);
    this._loading = false;
  };
}
