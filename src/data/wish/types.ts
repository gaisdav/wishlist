import { IUserEntity } from 'data/user/types.ts';

export interface IWishEntity {
  id: string;
  title: string;
  imageSrc?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  author: IUserEntity | null;
}

export interface ICreateWishDTO extends Omit<IWishEntity, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IEditWishDTO extends Omit<IWishEntity, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IWishResponse extends IWishEntity {}
