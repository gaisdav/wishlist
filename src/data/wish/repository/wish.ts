import { IWishRepository } from './types.ts';
import { ICreateWishDTO, IEditWishDTO, IWishResponse } from '../entity';
import { IFetcher } from 'libs/api';
import { EEndpoint } from 'common/endpoints.ts';
import { dynamicEndpoint } from 'common/utils/utils.ts';

export class WishRepository implements IWishRepository {
  constructor(private readonly fetcher: IFetcher) {}

  getList = async (username: string): Promise<IWishResponse[]> => {
    return await this.fetcher.get<IWishResponse[]>(EEndpoint.WISHES, {
      params: {
        username,
      },
    });
  };

  getProfileList = async (): Promise<IWishResponse[]> => {
    return await this.fetcher.get<IWishResponse[]>(EEndpoint.WISHES_PROFILE);
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
    return this.fetcher.get<IWishResponse>(
      dynamicEndpoint(EEndpoint.WISHES_ID, {
        wishId: id,
      }),
    );
  }

  deleteWish(id: string): Promise<void> {
    return this.fetcher.delete<void>(
      dynamicEndpoint(EEndpoint.WISHES_ID, {
        wishId: id,
      }),
    );
  }
}
