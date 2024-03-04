import { IWishRepository } from './types.ts';
import { ICreateWishDTO, IEditWishDTO, IWishEntity, IWishResponse } from '../entity';
import { IFetcher } from 'libs/api';
import { EEndpoint } from 'common/endpoints.ts';
import { dynamicEndpoint } from 'common/utils.ts';

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
    return await this.fetcher.get<IWishResponse[]>(EEndpoint.WISHES);
  };

  createWish(dto: ICreateWishDTO): Promise<IWishResponse> {
    return this.fetcher.post<IWishResponse>(EEndpoint.WISHES, {
      data: dto,
    });
  }

  editWish(id: string, dto: IEditWishDTO): Promise<IWishResponse> {
    return this.fetcher.patch<IWishResponse>(
      dynamicEndpoint(EEndpoint.WISHES_ID, {
        wishId: id,
      }),
      {
        data: dto,
      },
    );
  }

  getWish(id: string): Promise<IWishResponse> {
    const listFromStorage = window.localStorage.getItem('wishes');
    const list: IWishEntity[] = listFromStorage ? JSON.parse(listFromStorage) : [];
    const wish = list.find((item) => item.id === id);

    return delayedResponse(wish as IWishResponse, randomDelay(3000));
  }

  deleteWish(id: string): Promise<IWishResponse> {
    return this.fetcher.delete<IWishResponse>(
      dynamicEndpoint(EEndpoint.WISHES_ID, {
        wishId: id,
      }),
    );
  }
}
