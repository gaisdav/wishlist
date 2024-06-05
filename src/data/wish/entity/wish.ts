import { IWishEntity, IWishResponse } from '../types.ts';
import { IUserEntity } from 'data/user/types.ts';

export class Wish implements IWishEntity {
  id: string = '';
  title: string = '';
  imageSrc?: string;
  description?: string;
  createdAt: string = '';
  updatedAt: string = '';
  author: IUserEntity;

  constructor(data: IWishResponse) {
    this.id = data.id;
    this.title = data.title;
    this.imageSrc = data.imageSrc;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.author = data.author;
  }
}
