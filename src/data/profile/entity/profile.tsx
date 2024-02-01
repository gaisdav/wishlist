import { IProfileEntity } from './types.ts';

export class Profile implements IProfileEntity {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatarSrc?: string;
  birthdate: string;
  email: string;
  createdAt: string;
  updatedAt: string;

  constructor(profile: IProfileEntity) {
    this.id = profile.id;
    this.username = profile.username;
    this.firstName = profile.firstName;
    this.lastName = profile.lastName;
    this.bio = profile.bio;
    this.avatarSrc = profile.avatarSrc;
    this.birthdate = profile.birthdate;
    this.email = profile.email;
    this.createdAt = profile.createdAt;
    this.updatedAt = profile.updatedAt;
  }
}
