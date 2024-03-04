import { IWishRepository } from './types.ts';
import { ICreateWishDTO, IEditWishDTO, IWishEntity, IWishResponse } from '../entity';
import { faker } from '@faker-js/faker';
import { IFetcher } from 'libs/api';

function delayedResponse<T>(args: T, delayMs: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(args);
    }, delayMs);
  });
}

const randomDelay = (ms: number) => Math.floor(Math.random() * ms);

export class WishRepository implements IWishRepository {
  constructor(private readonly fetcher: IFetcher) {}

  getList = async (): Promise<IWishResponse[]> => {
    return await this.fetcher.get<IWishResponse[]>('/wishes');
  };

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

  editWish(id: string, dto: IEditWishDTO): Promise<IWishResponse> {
    const listFromStorage = window.localStorage.getItem('wishes');
    const list: IWishEntity[] = listFromStorage ? JSON.parse(listFromStorage) : [];
    let wish: IWishResponse | null = null;
    const newList = list.map((item) => {
      if (item.id === id) {
        wish = {
          ...item,
          ...dto,
          updatedAt: new Date().toString(),
        };
        return wish;
      }
      return item;
    });

    window.localStorage.setItem('wishes', JSON.stringify(newList));

    return delayedResponse(wish as unknown as IWishResponse, randomDelay(3000));
  }

  getWish(id: string): Promise<IWishResponse> {
    const listFromStorage = window.localStorage.getItem('wishes');
    const list: IWishEntity[] = listFromStorage ? JSON.parse(listFromStorage) : [];
    const wish = list.find((item) => item.id === id);

    return delayedResponse(wish as IWishResponse, randomDelay(3000));
  }

  deleteWish(id: string): Promise<IWishResponse> {
    const listFromStorage = window.localStorage.getItem('wishes');
    const list: IWishEntity[] = listFromStorage ? JSON.parse(listFromStorage) : [];
    const wish = list.find((item) => item.id === id);
    const newList = list.filter((item) => item.id !== id);
    window.localStorage.setItem('wishes', JSON.stringify(newList));

    return delayedResponse(wish as IWishResponse, randomDelay(3000));
  }
}
