export interface IUserEntity {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatarSrc?: string;
  birthdate: Date;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserResponse extends Omit<IUserEntity, 'birthdate' | 'createdAt' | 'updatedAt'> {
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}
