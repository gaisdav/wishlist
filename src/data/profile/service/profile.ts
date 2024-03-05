import { IProfileEditDTO, IProfileEntity, IProfileRepository, IProfileService } from 'data/profile/types.ts';
import { Profile } from 'data/profile/entity';

export class ProfileService implements IProfileService {
  constructor(private repository: IProfileRepository) {}

  editProfile = async (dto: IProfileEditDTO): Promise<IProfileEntity> => {
    const editedProfile = await this.repository.editProfile(dto);
    return new Profile(editedProfile);
  };

  getProfile = async (): Promise<IProfileEntity> => {
    const profile = await this.repository.getProfile();
    return new Profile(profile);
  };
}
