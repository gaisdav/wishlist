import { IWishVM } from './types.ts';
import { ICreateWishDTO, IWishEntity } from '../entity';
import { IWishService } from '../service';
import { makeAutoObservable } from 'mobx';

export class WishVM implements IWishVM {
  private _loading: boolean = false;
  private _list: IWishEntity[] = [];
  private _entity: IWishEntity | null = null;
  private _loadedWishes: Record<string, boolean> = {};

  get loading(): boolean {
    return this._loading;
  }

  get list(): IWishEntity[] {
    return this._list;
  }

  get entity(): IWishEntity | null {
    return this._entity;
  }

  constructor(private service: IWishService) {
    makeAutoObservable(this);
  }

  isLoaded = (id: string): boolean => {
    return this._loadedWishes[id] ?? false;
  };

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

  getWish = async (id: string): Promise<void> => {
    this._loading = true;
    this._entity = await this.service.getWish(id);
    this._loading = false;
  };

  deleteWish = async (id: string): Promise<void> => {
    this._loadedWishes[id] = true;
    const deletedWish = await this.service.deleteWish(id);
    this._list = this._list.filter((wish) => wish.id !== deletedWish.id);
    this._loadedWishes[id] = false;
  };
}
