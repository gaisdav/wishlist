import { IWishVM } from './types.ts';
import { ICreateWishDTO, IEditWishDTO, IWishEntity } from '../entity';
import { IWishService } from '../service';
import { makeAutoObservable } from 'mobx';
import { throwError } from 'data/utils';

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

  isLoading = (id: string): boolean => {
    return this._loadedWishes[id] ?? false;
  };

  getList = async (): Promise<void> => {
    try {
      this._loading = true;
      this._list = await this.service.getList();
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };

  addWish = async (dto: ICreateWishDTO): Promise<void> => {
    try {
      this._loading = true;
      const wish = await this.service.createWish(dto);
      this._list.unshift(wish);
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };

  editWish = async (id: string, dto: IEditWishDTO): Promise<void> => {
    this._loadedWishes[id] = true;
    const editedWishIndex = this._list.findIndex((item) => item.id === id);
    const oldWish = this._list[editedWishIndex];

    try {
      this._list[editedWishIndex] = { ...oldWish, ...dto };
      this._list[editedWishIndex] = await this.service.editWish(id, dto);
    } catch (error) {
      this._list[editedWishIndex] = oldWish;
      throwError(error);
    } finally {
      this._loadedWishes[id] = false;
    }
  };

  getWish = async (id: string): Promise<void> => {
    try {
      this._loading = true;
      this._entity = await this.service.getWish(id);
    } catch (error) {
      throwError(error);
    } finally {
      this._loading = false;
    }
  };

  deleteWish = async (id: string): Promise<void> => {
    this._loadedWishes[id] = true;

    try {
      const deletedWish = await this.service.deleteWish(id);
      this._list = this._list.filter((wish) => wish.id !== deletedWish.id);
    } catch (error) {
      throwError(error);
    } finally {
      this._loadedWishes[id] = false;
    }
  };
}
