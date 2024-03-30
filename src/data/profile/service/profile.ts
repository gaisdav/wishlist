import { IProfileEditDTO, IProfileEntity, IProfileRepository, IProfileService } from 'data/profile/types.ts';
import { Profile } from 'data/profile/entity';

export class ProfileService implements IProfileService {
  constructor(private repository: IProfileRepository) {}

  editProfile = async (_dto: IProfileEditDTO): Promise<IProfileEntity> => {
    const dto: IProfileEditDTO = {};

    for (const key in _dto) {
      dto[key as keyof IProfileEditDTO] = _dto[key as keyof IProfileEditDTO]?.trim();
    }

    const editedProfile = await this.repository.editProfile(dto);
    return new Profile(editedProfile);
  };

  getProfile = async (): Promise<IProfileEntity> => {
    const profile = await this.repository.getProfile();

    return new Profile(profile);
  };
}
