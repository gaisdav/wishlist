import { IUserEntity, IUserResponse } from './types.ts';

export class User implements IUserEntity {
  id: string = 'asdf';
  username: string = 'asdf';
  firstName: string = 'firstName';
  lastName: string = 'lastName';
  bio?: string = 'bio';
  avatarSrc?: string;
  birthdate: Date = new Date();
  email: string = 'email@email.com';
  createdAt: string;
  updatedAt: string;

  constructor(dto: IUserResponse) {
    this.id = dto.id;
    this.username = dto.username;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    this.bio = dto.bio;
    this.avatarSrc = dto.avatarSrc;
    this.birthdate = new Date(dto.birthdate);
    this.email = dto.email;
    this.createdAt = dto.createdAt;
    this.updatedAt = dto.updatedAt;
  }
}
