import { IFetcher } from 'libs/api';
import { EEndpoint } from 'common/endpoints.ts';
import { IProfileEditDTO, IProfileRepository, IProfileResponse } from 'data/profile/types.ts';

export class ProfileRepository implements IProfileRepository {
  constructor(private readonly fetcher: IFetcher) {}

  editProfile(dto: IProfileEditDTO): Promise<IProfileResponse> {
    return this.fetcher.patch(EEndpoint.PROFILE, { data: dto });
  }

  getProfile(): Promise<IProfileResponse> {
    return this.fetcher.get<IProfileResponse>(EEndpoint.PROFILE);
  }
}
