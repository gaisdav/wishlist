import { IWishRepository } from './types.ts';
import { IWishEntity } from '../entity';
import { faker } from '@faker-js/faker';

function delayedResponse<T>(args: T, delayMs: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(args);
    }, delayMs);
  });
}

const randomDelay = (ms: number) => Math.floor(Math.random() * ms);
const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export class WishRepository implements IWishRepository {
  getList(): Promise<IWishEntity[]> {
    const list: IWishEntity[] = Array.from({ length: randomNum(0, 20) }, () => ({
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      createdAt: faker.date.past().toString(),
      updatedAt: faker.date.recent().toString(),
      imageSrc: faker.image.urlLoremFlickr({
        width: randomNum(100, 900),
        height: randomNum(100, 900),
        category: 'abstract',
      }),
    }));

    return delayedResponse(list, randomDelay(3000));
  }
}
