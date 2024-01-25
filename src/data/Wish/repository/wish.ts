import { IWishRepository } from './types.ts';
import { ICreateWishDTO, IWishEntity, IWishResponse } from '../entity';
import { faker } from '@faker-js/faker';

function delayedResponse<T>(args: T, delayMs: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(args);
    }, delayMs);
  });
}

const randomDelay = (ms: number) => Math.floor(Math.random() * ms);

export class WishRepository implements IWishRepository {
  getList(): Promise<IWishResponse[]> {
    const listFromStorage = window.localStorage.getItem('wishes');

    const list: IWishResponse[] = listFromStorage ? JSON.parse(listFromStorage) : [];

    return delayedResponse(list, randomDelay(3000));
  }

  createWish(dto: ICreateWishDTO): Promise<IWishResponse> {
    const wish: IWishEntity = {
      ...dto,
      imageSrc: dto.imageSrc || faker.image.url(),
      id: faker.string.uuid(),
      updatedAt: new Date().toString(),
      createdAt: faker.date.recent().toString(),
    };

    const listFromStorage = window.localStorage.getItem('wishes');
    const list: IWishEntity[] = listFromStorage ? JSON.parse(listFromStorage) : [];
    list.unshift(wish);
    window.localStorage.setItem('wishes', JSON.stringify(list));
    return delayedResponse(wish, randomDelay(3000));
  }
}
