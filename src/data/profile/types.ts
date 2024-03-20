import { IUserEntity } from 'data/user/entity';

export interface IProfileEntity extends IUserEntity {}

export interface IProfileResponse extends Omit<IProfileEntity, 'birthdate' | 'createdAt' | 'updatedAt'> {
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProfileEditDTO
  extends Omit<Partial<IProfileEntity>, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'birthdate'> {
  birthdate: string;
}

export interface IProfileVM {
  loading: boolean;
  entity: IProfileEntity | null;

  getProfile(): Promise<void>;
  editProfile(dto: IProfileEditDTO): Promise<void>;
}

export interface IProfileService {
  getProfile(): Promise<IProfileEntity>;
  editProfile(dto: IProfileEditDTO): Promise<IProfileEntity>;
}

export interface IProfileRepository {
  getProfile(): Promise<IProfileResponse>;
  editProfile(dto: IProfileEditDTO): Promise<IProfileResponse>;
}
