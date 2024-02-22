import { IProfileEntity } from './types.ts';

export class Profile implements IProfileEntity {
  id: string = 'asdf';
  username: string = 'asdf';
  firstName: string = 'firstName';
  lastName: string = 'lastName';
  bio?: string = 'bio';
  avatarSrc?: string = 'https://loremflickr.com/640/480?lock=4649505131593728';
  birthdate: Date = new Date('2021-02-22T00:00:00.000Z');
  email: string = 'email@email.com';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  // constructor(dto: IProfileResponse)
  constructor() {
    // this.id = dto.id;
    // this.username = dto.username;
    // this.firstName = dto.firstName;
    // this.lastName = dto.lastName;
    // this.bio = dto.bio;
    // this.avatarSrc = dto.avatarSrc;
    // this.birthdate = new Date(dto.birthdate);
    // this.email = dto.email;
    // this.createdAt = dto.createdAt;
    // this.updatedAt = dto.updatedAt;
  }
}