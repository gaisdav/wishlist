import { IUserEntity, IUserResponse } from '../types.ts';

export class User implements IUserEntity {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatarSrc?: string;
  birthdate?: Date | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: IUserResponse) {
    this.id = dto.id;
    this.username = dto.username;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    this.bio = dto.bio;
    this.avatarSrc = dto.avatarSrc;
    this.birthdate = dto.birthdate ? new Date(dto.birthdate) : null;
    this.email = dto.email;
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }
}
