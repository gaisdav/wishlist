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
  findUsers: (search: string) => Promise<IUserResponse[]>;
}

export interface IUserService {
  getUser: (username: string) => Promise<IUserEntity>;
  getUsers: (search: string) => Promise<IUserEntity[]>;
}

export interface IUserVM {
  loading: boolean;
  usersLoading: boolean;
  user: IUserEntity | null;
  users: IUserEntity[];
  getUser: (username: string) => Promise<void>;
  getUsers: (search: string) => Promise<void>;
}
