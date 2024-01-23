import { IWishEntity } from './types.ts';
import { faker } from '@faker-js/faker';

export class Wish implements IWishEntity {
  id: string = faker.string.uuid();
  title: string = faker.lorem.words(3);
  description?: string = faker.lorem.sentence();
  createdAt: string = faker.date.past().toISOString();
  updatedAt: string = faker.date.past().toISOString();
}
