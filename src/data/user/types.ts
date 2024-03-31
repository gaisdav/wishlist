export interface IUserEntity {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string;
  birthdate?: Date | null;
  avatarSrc?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface IUserResponse extends Omit<IUserEntity, 'birthdate' | 'createdAt' | 'updatedAt'> {
  birthdate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserRepository {
  findOneById: (username: string) => Promise<IUserResponse>;
}

export interface IUserService {
  getUser: (username: string) => Promise<IUserEntity>;
}

export interface IUserVM {
  loading: boolean;
  entity: IUserEntity | null;
  getUser: (username: string) => Promise<void>;
}
