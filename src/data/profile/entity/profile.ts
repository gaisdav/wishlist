import { IProfileEntity, IProfileResponse } from '../types.ts';

export class Profile implements IProfileEntity {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatarSrc?: string;
  birthdate: Date | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: IProfileResponse) {
    this.id = dto.id;
    this.username = dto.username;
    this.firstName = dto.firstName.trim();
    this.lastName = dto.lastName.trim();
    this.bio = dto.bio?.trim();
    this.avatarSrc = dto.avatarSrc;
    this.birthdate = dto.birthdate ? new Date(dto.birthdate) : null;
    this.email = dto.email;
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }
}
