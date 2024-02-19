export interface IUserEntity {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatarSrc?: string;
  birthdate: Date;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse extends Omit<IUserEntity, 'birthdate'> {
  birthdate: string;
}
