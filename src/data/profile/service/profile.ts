import { IProfileEditDTO, IProfileEntity, IProfileRepository, IProfileService } from 'data/profile/types.ts';
import { Profile } from 'data/profile/entity';

export class ProfileService implements IProfileService {
  constructor(private repository: IProfileRepository) {}

  editProfile = async (dto: IProfileEditDTO): Promise<IProfileEntity> => {
    const editedProfile = await this.repository.editProfile(dto);
    return new Profile(editedProfile);
  };

  getProfile = async (): Promise<IProfileEntity> => {
    // const profile = await this.repository.getProfile();
    return new Profile({
      id: 'dto.id',
      username: ' dto.username',
      firstName: ' dto.firstName',
      lastName: ' dto.lastName',
      bio: ' dto.bio',
      avatarSrc: ' dto.avatarSrc',
      birthdate: '2018-07-22',
      email: ' dto.email',
      createdAt: ' new Date(dto.createdAt)',
      updatedAt: ' new Date(dto.updatedAt)',
    });
  };
}
