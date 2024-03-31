import { IFetcher } from 'libs/api';
import { EEndpoint } from 'common/endpoints.ts';
import { IUserRepository, IUserResponse } from '../types.ts';
import { dynamicEndpoint } from 'common/utils.ts';

export class UserRepository implements IUserRepository {
  constructor(private readonly fetcher: IFetcher) {}

  findOneById = async (username: string): Promise<IUserResponse> => {
    const endpoint = dynamicEndpoint(EEndpoint.USERS_ID, {
      username,
    });

    return await this.fetcher.get<IUserResponse>(endpoint);
  };

  findUsers = async (search: string): Promise<IUserResponse[]> => {
    return await this.fetcher.get<IUserResponse[]>(EEndpoint.USERS, {
      params: {
        search,
      },
    });
  };
}
