import { IProfileEntity, IProfileResponse } from '../types.ts';

export class Profile implements IProfileEntity {
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

  constructor(dto: IProfileResponse) {
    this.id = dto.id;
    this.username = dto.username;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    this.bio = dto.bio;
    this.avatarSrc = dto.avatarSrc;
    this.birthdate = new Date(dto.birthdate);
    this.email = dto.email;
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }
}
